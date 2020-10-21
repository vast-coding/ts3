import { useState } from 'react'
import { themeLight } from './themeLight'
import { themeDark } from './themeDark'

export const useThemeColors = (defaultColors = themeLight) => {
  const [themeColors, setThemeColors] = useState(defaultColors)

  const setDark = () => {
    setThemeColors((prev) => themeDark)
  }

  const setLight = () => {
    setThemeColors((prev) => themeLight)
  }

  const toggleThemeColors = () => {
    setThemeColors((prev) => (prev.id === 'light' ? themeDark : themeLight))
  }

  return { themeColors, toggleThemeColors, setLight, setDark }
}
