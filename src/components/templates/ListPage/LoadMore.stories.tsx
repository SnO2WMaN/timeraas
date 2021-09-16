import {Meta, Story} from '@storybook/react';
import React from 'react';

import {LoadMore, LoadMoreProps} from './LoadMore';

export default {
  title: 'ListPage/LoadMoreButton',
  component: LoadMore,
  argTypes: {},
} as Meta;

export const Primary: Story<LoadMoreProps> = (args) => <LoadMore {...args} />;
Primary.args = {};
