import clsx from 'clsx';
import gql from 'graphql-tag';
import React from 'react';

import {IconDate, IconMore, IconTime, IconTitle} from '../Icon';

import {useTranslation} from '~/i18n/useTranslation';

const CreateCountdownQuery = gql`
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
export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  const {LL} = useTranslation();

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
    >
      <label
        className={clsx(
          'col-span-full',
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
          className={clsx(['mt-2'])}
          id="title"
          type="text"
          required
          aria-label={LL.NewPage.Form.Label.Title()}
          autoComplete="text"
        />
      </label>
      <label
        className={clsx(
          'col-span-1',
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
          className={clsx(['mt-2'])}
          id="date"
          type="date"
          required
          autoComplete="date"
          aria-label={LL.NewPage.Form.Label.Date()}
        />
      </label>
      <label
        className={clsx(
          'col-span-1',
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
        />
      </label>
      <button
        className={clsx(
          ['col-span-full'],
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
    </form>
  );
};

export type FormProps = {className?: string};
export const Form: React.VFC<FormProps> = ({...props}) => {
  return <Component {...props} />;
};
