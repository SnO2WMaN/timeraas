import clsx from 'clsx';
import React from 'react';

import {useTranslation} from '~/i18n/useTranslation';
import {IconMore} from '~/components/Icon';

export const SubmitButton: React.VFC<{
  className?: string;
  submitting: boolean;
}> = ({className}) => {
  const {LL} = useTranslation();
  return (
    <button
      className={clsx(
        className,
        ['py-4'],
        ['rounded-md'],
        ['inline-flex', 'justify-center', 'items-center'],
        ['border', 'border-night-4'],
        ['bg-night-1', 'hover:bg-frost-1'],
        ['text-snow-3', 'hover:text-night-1'],
      )}
      type="submit"
    >
      <IconMore className={clsx('text-sm')} />
      <span className={clsx('ml-2', ['font-bold'])}>
        {LL.NewPage.Form.Submit()}
      </span>
    </button>
  );
};
