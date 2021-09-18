import {Meta, Story} from '@storybook/react';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {Component, ComponentProps} from '.';

export default {
  title: 'NewPage/Form',
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => {
      const methods = useForm({});
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {};
