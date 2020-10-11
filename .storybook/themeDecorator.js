import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themeLight } from '../src/themes'

const ThemeDecorator = (storyFn) => {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  )
}

export default ThemeDecorator
