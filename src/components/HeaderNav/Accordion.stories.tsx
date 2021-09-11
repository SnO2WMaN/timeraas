import {Meta, Story} from '@storybook/react';
import React from 'react';

import {Accordion, AccordionProps} from './Accordion';

export default {
  title: 'HeaderNav/Accordion',
  component: Accordion,
} as Meta;

export const Primary: Story<AccordionProps> = (args) => <Accordion {...args} />;
Primary.args = {
  user: {alias: 'Alias', displayName: 'DisplayName'},
};
