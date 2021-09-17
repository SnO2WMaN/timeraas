import clsx from 'clsx';
import React from 'react';

import {useTranslation} from '~/i18n/useTranslation';
import {IconMore} from '~/components/Icon';

export type ComponentProps =
  | {className?: string; disabled: false}
  | {className?: string; disabled: true; submitting: true}
  | {className?: string; disabled: true; success: true};
export const ComponentProps: React.VFC<ComponentProps> = ({
  className,
  disabled,
  ...props
}) => {
  const {LL} = useTranslation();
  return (
    <button
      className={clsx(
        className,
        ['py-4'],
        ['rounded-md'],
        ['inline-flex', 'justify-center', 'items-center'],
        ['border', 'border-night-4'],
        ['bg-night-1', {'hover:bg-frost-1': !disabled}],
        ['text-snow-3', {'hover:text-night-1': !disabled}],
      )}
      type="submit"
      disabled={disabled}
    >
      {!('submitting' in props) && !('success' in props) && (
        <>
          <IconMore className={clsx('text-sm')} />
          <span className={clsx('ml-2', ['font-bold'])}>
            {LL.NewPage.Form.Submit()}
          </span>
        </>
      )}
      {'submitting' in props && (
        <>
          <IconMore className={clsx('text-sm')} />
          <span className={clsx('ml-2', ['font-bold'])}>
            {LL.NewPage.Form.Submitting()}
          </span>
        </>
      )}
      {'success' in props && (
        <>
          <IconMore className={clsx('text-sm')} />
          <span className={clsx('ml-2', ['font-bold'])}>
            {LL.NewPage.Form.SubmitSuccess()}
          </span>
        </>
      )}
    </button>
  );
};

export const SubmitButton: React.VFC<{
  className?: string;
  submitting: boolean;
  success: boolean;
}> = ({submitting, success, ...props}) => {
  if (success) return <ComponentProps {...props} disabled success />;
  else if (submitting) return <ComponentProps {...props} disabled submitting />;
  else return <ComponentProps disabled={false} {...props} />;
};
