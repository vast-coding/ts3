import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themeLight } from 'themes'
import { Button } from 'components'

export const App = () => (
  <ThemeProvider theme={themeLight}>
    <GlobalStyle />
    <div>
      App
      <Button> default </Button>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secodary</Button>
      <Button variant="outline">outline</Button>
    </div>
  </ThemeProvider>
)
