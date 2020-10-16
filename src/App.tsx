import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themeLight } from 'themes'
import { Button } from 'components'

export const App = () => (
  <ThemeProvider theme={themeLight}>
    <GlobalStyle />
    <div>
      App
      <Button>
        {' '}
        <div>div-child</div>{' '}
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
