import { useState } from 'react'
import { typography } from './typography'

export const useTypography = (
  defaultFontScale = typography.defaultScaleIndex
) => {
  const [fontScale, setfontScale] = useState(defaultFontScale)

  const increaseFontSize = () => {
    if (fontScale === typography.scale.length - 1) return
    setfontScale((prev) => prev + 1)
  }

  const decreaseFontSize = () => {
    if (fontScale === 0) return
    setfontScale((prev) => prev - 1)
  }
  const fontSizes = typography.scale[fontScale]

  return { fontSizes, increaseFontSize, decreaseFontSize }
}
