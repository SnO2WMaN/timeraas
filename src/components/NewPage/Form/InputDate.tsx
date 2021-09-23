import clsx from 'clsx';
import React from 'react';
import {useFormContext} from 'react-hook-form';
import {add, format} from 'date-fns';

import {FormData} from './formTypes';

import {IconDate} from '~/components/Icon';
import {useTranslation} from '~/i18n/useTranslation';

export const useDuration = () => {
  const today = new Date();
  return {
    min: format(add(today, {hours: 6}), 'yyyy-MM-dd'),
    max: format(add(today, {days: 20}), 'yyyy-MM-dd'),
  };
};

export const InputDate: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  const {LL} = useTranslation();
  const {register} = useFormContext<FormData>();

  const {min, max} = useDuration();

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
      htmlFor="date"
    >
      <span className={clsx(['inline-flex'], ['items-center'])}>
        <IconDate className={clsx(['text-aurora-2'])} />
        <span className={clsx(['ml-2'], ['text-snow-1'], ['font-bold'])}>
          {LL.NewPage.Form.Label.Date()}
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
        id="date"
        type="date"
        required
        autoComplete="date"
        aria-label={LL.NewPage.Form.Label.Date()}
        min={min}
        max={max}
        {...register('date')}
      />
    </label>
  );
};
