import { addDecorator } from '@storybook/react'
import themeDecorator from './themeDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

addDecorator(themeDecorator)
