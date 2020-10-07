import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, IButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
}

export const DefaultVariant = Template.bind({})
DefaultVariant.args = {
  children: 'default Variant Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large Button',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  children: 'Medium Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small Button',
}
