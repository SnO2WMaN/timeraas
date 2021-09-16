import {Meta, Story} from '@storybook/react';
import React from 'react';

import {LoadMore, LoadMoreProps} from './LoadMore';

export default {
  title: 'ListPage/LoadMoreButton',
  component: LoadMore,
  argTypes: {},
} as Meta;

export const Active: Story<LoadMoreProps> = (args) => <LoadMore {...args} />;
Active.args = {loading: true};

export const Loading: Story<LoadMoreProps> = (args) => <LoadMore {...args} />;
Loading.args = {loading: false};
