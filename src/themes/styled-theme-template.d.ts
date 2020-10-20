// import original module declarations
import 'styled-components'
import typography from './typography'
import colors, { primary, secondary, greys } from './colors'

declare module 'styled-components' {
  export interface IDefaultTheme {
    colorBodyBackground: string
    colorBodyFont: string
    colorContent: string
    colorSubTitle: string
    colorTitle: string
    id: string
    primaryColor: string
    primaryColorHover: string
    secondaryColor: string
    secondaryColorHover: string
    fontSizes: typeof typography.fontSizes
    primary: typeof primary
    secondary: typeof primary
    greys: typeof primary
  }
}
