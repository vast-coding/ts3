// import original module declarations
import 'styled-components'
import typography from './typography'

declare module 'styled-components' {
  export interface IDefaultTheme {
    colorBodyBackground: string
    colorBodyFont: string
    colorContent: string
    colorSubTitle: string
    colorTitle: string
    id: string
    primaryColor: string
    secondaryColor: string
    fontSizes: typeof typography.fontSizes
  }
}
