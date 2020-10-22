import { colors } from './colors'
import { IDefaultTheme } from 'styled-components'
import { typography } from './typography'

const {
  primary,
  secondary,
  greys,
  primaryDarkReversed,
  secondaryDarkReversed,
  greysDarkReversed,
} = colors

const themeLight: IDefaultTheme = {
  colorBodyBackground: 'white',
  colorBodyFont: 'black',
  colorContent: colors.greys[7],
  colorSubTitle: colors.primary[7],
  colorTitle: colors.primary[9],
  id: 'light',
  primaryColor: colors.primary[5],
  primaryColorHover: colors.primary[6],
  secondaryColor: colors.secondary[5],
  secondaryColorHover: colors.secondary[6],
  fontSizes: typography.fontSizes,
  primary,
  secondary,
  greys,
  primaryDarkReversed,
  secondaryDarkReversed,
  greysDarkReversed,
}

export { themeLight }
