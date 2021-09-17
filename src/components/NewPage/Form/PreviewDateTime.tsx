import React, {useMemo} from 'react';
import {useFormContext} from 'react-hook-form';
import clsx from 'clsx';

import {formatDate} from './formatDate';
import {FormData} from './formTypes';

import {useTranslation} from '~/i18n/useTranslation';
import {IconPreviewIgniteAt} from '~/components/Icon';

export type ComponentProps =
  | {className?: string}
  | {className?: string; timeZone: string; preview: Date};
export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  const {LL} = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ['flex', 'flex-col'],
        ['px-4'],
        ['py-4'],
        ['rounded-md'],
        ['bg-night-1'],
        ['border', 'border-night-4'],
      )}
    >
      <span className={clsx(['inline-flex'], ['items-center'])}>
        <IconPreviewIgniteAt className={clsx(['text-frost-2'])} />
        <span className={clsx(['ml-2'], ['text-snow-1'], ['font-bold'])}>
          {LL.NewPage.Form.PreviewIgniteAt()}
        </span>
      </span>
      {'preview' in props && (
        <>
          <time className={clsx(['mt-2'], ['text-xl'], ['text-frost-2'])}>
            {LL.FormatDate.LongDateTime(props.preview)}
          </time>
          <p className={clsx(['mt-1'], ['text-sm'], ['text-snow-1'])}>
            {LL.NewPage.Form.NoticeTimeZone({timeZone: props.timeZone})}
          </p>
        </>
      )}
      {!('preview' in props) && (
        <p className={clsx(['mt-1'], ['text-base'], ['text-snow-1'])}>
          {LL.NewPage.Form.NoticeInputDateTime()}
        </p>
      )}
    </div>
  );
};

export const PreviewDateTime: React.VFC<{className?: string}> = ({
  ...props
}) => {
  const {watch} = useFormContext<FormData>();
  const {date, time, timeZone} = watch();

  const previewDate = useMemo(
    () =>
      date && time && timeZone ? formatDate({date, time, timeZone}) : undefined,
    [date, time, timeZone],
  );

  if (previewDate && timeZone)
    return <Component {...props} preview={previewDate} timeZone={timeZone} />;
  else return <Component {...props} />;
};
