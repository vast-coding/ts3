import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from 'components'
import {
  defaultFontScale,
  GlobalStyle,
  themeLight,
  useTypography,
  useThemeColors,
} from 'themes'

export const App = () => {
  const { fontSizes, increaseFontSize, decreaseFontSize } = useTypography(
    defaultFontScale
  )
  const { themeColors, toggleThemeColors } = useThemeColors(themeLight)
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
      <div>
        App
        <Button scale="small" onClick={decreaseFontSize}>
          -A
        </Button>
        <Button scale="large" onClick={increaseFontSize}>
          +A
        </Button>
        <Button scale="large" onClick={toggleThemeColors}>
          Theme
        </Button>
        <Button> default </Button>
        <Button scale="large" disabled>
          disabled
        </Button>
        <Button scale="large" type="submit">
          submit
        </Button>
        <Button scale="small">small</Button>
        <Button scale="medium">medium</Button>
        <Button scale="large">large</Button>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secodary</Button>
        <Button variant="outline">outline</Button>
      </div>
    </ThemeProvider>
  )
}
