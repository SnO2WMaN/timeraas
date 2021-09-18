import clsx from 'clsx';
import React from 'react';
import {useFormContext} from 'react-hook-form';

import {FormData} from './formTypes';

import {IconTitle} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';

export const InputTitle: React.VFC<{className?: string}> = ({
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
      htmlFor="title"
    >
      <span className={clsx(['inline-flex'], ['items-center'])}>
        <IconTitle className={clsx(['text-frost-2'])} />
        <span className={clsx(['ml-2'], ['text-snow-1'], ['font-bold'])}>
          {LL.NewPage.Form.Label.Title()}
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
        id="title"
        type="text"
        required
        aria-label={LL.NewPage.Form.Label.Title()}
        autoComplete="text"
        {...register('title')}
      />
    </label>
  );
};
