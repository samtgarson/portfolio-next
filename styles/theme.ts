import { createContainer } from 'unstated-next'
import { useState } from 'react'

export interface Colors {
  bg: string
  fg: string
}

export enum Themes {
  Dark = 'dark',
  White = 'white'
}

const themes: Record<string, Colors> = {
  [Themes.Dark]: { bg: 'black', fg: 'white' },
  [Themes.White]: { bg: 'white', fg: 'black' }
}

export const defaultTheme = themes[Themes.White]

const useTheme = () => {
  const [colors, _setTheme] = useState<Colors>(defaultTheme)
  const setTheme = (theme: Themes) => {
    if (themes[theme]) _setTheme(themes[theme])
  }

  return { colors, setTheme }
}

export const Theme = createContainer(useTheme)
