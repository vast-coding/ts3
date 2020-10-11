import { colors } from './colors'
import { IDefaultTheme } from 'styled-components'

const themeLight: IDefaultTheme = {
  colorBodyBackground: 'white',
  colorBodyFont: 'black',
  colorContent: colors.greys[700],
  colorSubTitle: colors.primary[700],
  colorTitle: colors.primary[900],
  id: 'light',
  primaryColor: colors.primary[500],
  secondaryColor: colors.secondary[500],
}

export { themeLight }
