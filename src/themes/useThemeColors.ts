import { useState } from 'react'
import { themeLight } from './themeLight'
import { themeDark } from './themeDark'

export const useThemeColors = (defaultColors = themeLight) => {
  const [themeColors, setThemeColors] = useState(defaultColors)
  const toggleThemeColors = () =>
    setThemeColors((prev) => (prev.id === 'light' ? themeDark : themeLight))
  return { themeColors, toggleThemeColors }
}
