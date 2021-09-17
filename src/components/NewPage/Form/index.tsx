import clsx from 'clsx';
import gql from 'graphql-tag';
import React, {useMemo} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import {useTimeoutFn} from 'react-use';

import {useCreateCountdownMutation} from './index.codegen';
import {formatDate} from './formatDate';
import {InputTitle} from './InputTitle';
import {InputDate} from './InputDate';
import {InputTime} from './InputTime';
import {InputTimeZone} from './InputTimeZone';
import {FormData} from './formTypes';
import {PreviewDateTime} from './PreviewDateTime';
import {SubmitButton} from './SubmitButton';

import {IconLoading} from '~/components/Icon';

const CreateCountdownMutation = gql`
  mutation CreateCountdown($title: String!, $igniteAt: DateTime!) {
    createCountdown(title: $title, igniteAt: $igniteAt) {
      countdown {
        id
        title
        igniteAt
      }
    }
  }
`;
export type ComponentProps = {
  className?: string;
  onSubmit(): void;
  submitting: boolean;
  success: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
  submitting,
  success,
  ...props
}) => {
  return (
    <form
      className={clsx(
        className,
        ['inline-grid'],
        ['grid-cols-2'],
        ['gap-x-4'],
        ['gap-y-4'],
        ['px-8'],
        ['py-8'],
        ['rounded-md'],
        ['bg-night-2'],
        ['border', 'border-night-4'],
      )}
      onSubmit={onSubmit}
    >
      <InputTitle className={clsx('col-span-full')} />
      <InputDate className={clsx('col-span-1')} />
      <InputTime className={clsx('col-span-1')} />
      <InputTimeZone className={clsx('col-span-full')} />
      <PreviewDateTime className={clsx('col-span-full')} />
      <SubmitButton
        className={clsx('col-span-full')}
        submitting={submitting}
        success={success}
      />
    </form>
  );
};

export type FormProps = {className?: string};
export const Form: React.VFC<FormProps> = ({...props}) => {
  const [result, createCountdown] = useCreateCountdownMutation();
  const methods = useForm<FormData>({
    defaultValues: {
      timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });
  const {fetching, data} = result;

  const newId = useMemo(
    () => data?.createCountdown.countdown.id || null,
    [data],
  );

  return (
    <FormProvider {...methods}>
      <Component
        {...props}
        onSubmit={methods.handleSubmit(({title, date, time, timeZone}) =>
          createCountdown({
            title,
            igniteAt: formatDate({time, date, timeZone}).toISOString(),
          }),
        )}
        submitting={fetching}
        success={Boolean(newId)}
      />
      {newId && <PageMover id={newId} />}
    </FormProvider>
  );
};

export const PageMover: React.VFC<{id: string}> = ({id}) => {
  const router = useRouter();

  const [isReady, cancel, reset] = useTimeoutFn(
    () => router.push(`/countdowns/${id}`),
    500,
  );

  return <IconLoading />;
};
