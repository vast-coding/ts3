import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    :root {
      /* dark mode variables go here */
    }
  }

  /* 
  https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query 
  also add user controls for appropriate timings
  */
  @media screen and
  (prefers-reduced-motion: reduce), 
  (update: slow) {
    * {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important; 
      transition-duration: 0.001ms !important;
    }
  }

  body {
    background: ${(props) => props.theme.greys[0]};
    min-height: 100vh;
    margin: 0;
    color: ${(props) => props.theme.greys[9]};
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p{
    font-size: ${(props) => props.theme.fontSizes[0]}px;
  }

`
export { GlobalStyle }
