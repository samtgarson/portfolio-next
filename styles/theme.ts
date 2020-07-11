import { createContainer } from 'unstated-next'
import { useState } from 'react'

export interface Colors {
  bg: string
  fg: string
  accent: string
}

export enum Themes {
  Dark = 'dark',
  White = 'white',
  Bright = 'bright'
}

const themes: Record<string, Colors> = {
  [Themes.Dark]: { bg: 'black', fg: 'white', accent: '#19191C' },
  [Themes.White]: { bg: '#EEEDE9', fg: 'black', accent: 'white' },
  [Themes.Bright]: { bg: '#1502ff', fg: 'white', accent: 'white' }
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
