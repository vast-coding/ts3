import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Button } from 'components'
import {
  defaultFontScale,
  GlobalStyle,
  themeLight,
  useTypography,
  useThemeColors,
} from 'themes'
import { Home, Login } from 'components/pages'

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
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
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
