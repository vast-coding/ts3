import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  defaultFontScale,
  GlobalStyle,
  themeLight,
  useTypography,
} from '../src/themes'

const ThemeDecorator = (storyFn) => {
  const { fontSizes, increaseFontSize, decreaseFontSize } = useTypography(
    defaultFontScale
  )
  const theme = { ...themeLight, fontSizes, increaseFontSize, decreaseFontSize }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  )
}

export default ThemeDecorator
