import clsx from 'clsx';
import React from 'react';
import {useFormContext} from 'react-hook-form';

import {FormData} from './formTypes';

import {IconTimeZone} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';

export const InputTimeZone: React.VFC<{className?: string}> = ({
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
      htmlFor="timezone"
    >
      <span className={clsx(['inline-flex'], ['items-center'])}>
        <IconTimeZone className={clsx(['text-aurora-2'])} />
        <span className={clsx(['ml-2'], ['text-snow-1'], ['font-bold'])}>
          {LL.NewPage.Form.Label.TimeZone()}
        </span>
      </span>
      <input
        className={clsx(
          ['mt-2'],
          ['px-4'],
          ['py-2'],
          ['rounded'],
          ['bg-night-2'],
          ['border', 'border-night-4'],
          ['text-snow-3'],
        )}
        id="timezone"
        type="text"
        required
        disabled
        autoComplete="text"
        aria-label={LL.NewPage.Form.Label.TimeZone()}
        {...register('timeZone')}
      />
    </label>
  );
};
