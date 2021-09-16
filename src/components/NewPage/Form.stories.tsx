import {Meta, Story} from '@storybook/react';
import React from 'react';

import {Component, ComponentProps} from './Form';

export default {
  title: 'NewPage/Form',
  component: Component,
  argTypes: {},
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {};
