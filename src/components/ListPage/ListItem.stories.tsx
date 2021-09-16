import {Meta, Story} from '@storybook/react';
import React from 'react';

import {Component, ComponentProps} from './ListItem';

export default {
  title: 'ListPage/ListItem',
  component: Component,
  argTypes: {
    igniteAt: {control: {type: 'date'}},
    createdAt: {control: {type: 'date'}},
    updatedAt: {control: {type: 'date'}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {id: 'id', title: 'Title'};
