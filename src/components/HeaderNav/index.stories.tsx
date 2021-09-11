import {Meta, Story} from '@storybook/react';
import React from 'react';

import {View, ViewProps} from '.';
import {icon} from '~~/.storybook/assets';

export default {
  title: 'HeaderNav',
  component: View,
  argTypes: {
    user: {table: {disable: true}},
  },
} as Meta;

export const Loading: Story<ViewProps> = (args) => <View {...args} />;
Loading.args = {user: undefined};

export const NotSignedIn: Story<ViewProps> = (args) => <View {...args} />;
NotSignedIn.args = {user: null};

export const SignedIn: Story<ViewProps> = (args) => <View {...args} />;
SignedIn.args = {
  user: {image: icon(0), alias: 'Alias', displayName: 'DisplayName'},
};
