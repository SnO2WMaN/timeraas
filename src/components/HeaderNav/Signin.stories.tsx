import {Meta, Story} from '@storybook/react';
import React from 'react';

import {Signin, SigninProps} from './Signin';

export default {
  title: 'HeaderNav/Signin',
  component: Signin,
} as Meta;

export const Primary: Story<SigninProps> = (args) => <Signin {...args} />;
Primary.args = {};
