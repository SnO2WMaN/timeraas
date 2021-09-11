import * as nextImage from 'next/image';
import {RouterContext} from 'next/dist/shared/lib/router-context';

import TypesafeI18n from '~/i18n/i18n-react';

import '~/styles/index.css';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const decorators = [
  (Story) => (
    <TypesafeI18n>
      <Story />
    </TypesafeI18n>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  storySort: {method: 'alphabetical'},
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  argTypes: {
    className: {table: {disable: true}},
  },
};
