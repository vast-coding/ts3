import React, { useState } from 'react'
import addons from '@storybook/addons'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './useDarkMode'
import {
  defaultFontScale,
  GlobalStyle,
  themeLight,
  useThemeColors,
  useTypography,
} from '../src/themes'

const ThemeDecorator = (storyFn) => {
  const { fontSizes, increaseFontSize, decreaseFontSize } = useTypography(
    defaultFontScale
  )
  const { themeColors, toggleThemeColors, setDark, setLight } = useThemeColors(
    themeLight
  )
  const isDark = useDarkMode()
  React.useEffect(() => {
    isDark ? setDark() : setLight()
  }, [isDark])

  const theme = {
    ...themeColors,
    decreaseFontSize,
    fontSizes,
    increaseFontSize,
    toggleThemeColors,
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  )
}

export default ThemeDecorator
