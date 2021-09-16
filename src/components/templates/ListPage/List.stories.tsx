import {Meta, Story} from '@storybook/react';
import React from 'react';

import {Component, ComponentProps} from './List';

export default {
  title: 'ListPage/List',
  component: Component,
} as Meta;

export const Loading: Story<ComponentProps> = (args) => <Component {...args} />;
Loading.args = {loading: true};

export const Nothing: Story<ComponentProps> = (args) => <Component {...args} />;
Nothing.args = {countdowns: []};

export const Listed: Story<ComponentProps> = (args) => <Component {...args} />;
Listed.args = {
  countdowns: [
    {
      id: '1',
      title: 'Title 1',
      igniteAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Title 2',
      igniteAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title: 'Title 3',
      igniteAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  hasMore: true,
};
