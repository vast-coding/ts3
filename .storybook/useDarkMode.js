import React, { useState, useEffect } from 'react'
import addons from '@storybook/addons'

/**
 * set a global variable 'storedItem',
 * everytime darkmode is saved to LS
 */
window.addEventListener(
  'storage',
  function () {
    const storedItem = JSON.parse(
      window.localStorage.getItem('sb-addon-themes-3')
    ).current
    window.storedItem = storedItem
  },
  false
)

/**
 * Returns the current state of storybook's dark-mode
 */
export function useDarkMode() {
  const [isDark, setDark] = useState(window.storedItem === 'dark')

  useEffect(() => {
    const channel = addons.getChannel()
    channel.on('DARK_MODE', setDark)
    return () => channel.off('DARK_MODE', setDark)
  }, [])

  return isDark
}
