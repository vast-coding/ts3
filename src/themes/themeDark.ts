import { colors } from './colors'
import { IDefaultTheme } from 'styled-components'
import { typography } from './typography'

const {
  primaryDark: primary,
  secondaryDark: secondary,
  greysDark: greys,
  primaryDarkReversed,
  secondaryDarkReversed,
  greysDarkReversed,
} = colors

const themeDark: IDefaultTheme = {
  colorBodyBackground: 'white',
  colorBodyFont: 'black',
  colorContent: colors.greys[7],
  colorSubTitle: colors.primary[7],
  colorTitle: colors.primary[9],
  id: 'dark',
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

export { themeDark }
