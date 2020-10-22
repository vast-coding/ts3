// import original module declarations
import 'styled-components'
import typography from './typography'
import colors, { primary, secondary, greys, TColors } from './colors'

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
    primary: TColors
    secondary: TColors
    greys: TColors
    primaryDarkReversed: TColors
    secondaryDarkReversed: TColors
    greysDarkReversed: TColors
  }
}
