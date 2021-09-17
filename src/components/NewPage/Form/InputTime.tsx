import clsx from 'clsx';
import React from 'react';
import {useFormContext} from 'react-hook-form';

import {FormData} from './formTypes';

import {IconTime} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';

export const InputTime: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  const {LL} = useTranslation();
  const {register} = useFormContext<FormData>();

  return (
    <label
      className={clsx(
        className,
        ['flex', 'flex-col'],
        ['px-4'],
        ['py-4'],
        ['rounded-md'],
        ['bg-night-1'],
        ['border', 'border-night-4'],
      )}
      htmlFor="time"
    >
      <span className={clsx(['inline-flex'], ['items-center'])}>
        <IconTime className={clsx(['text-aurora-2'])} />
        <span className={clsx(['ml-2'], ['text-snow-1'], ['font-bold'])}>
          {LL.NewPage.Form.Label.Time()}
        </span>
      </span>
      <input
        className={clsx(['mt-2'])}
        id="time"
        type="time"
        required
        autoComplete="date"
        aria-label={LL.NewPage.Form.Label.Time()}
        {...register('time')}
      />
    </label>
  );
};
