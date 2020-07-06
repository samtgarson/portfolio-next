import { createContainer } from 'unstated-next'
import { useState } from 'react'

export interface Colors {
  bg: string
  fg: string
  accent: string
}

export enum Themes {
  Dark = 'dark',
  White = 'white'
}

const themes: Record<string, Colors> = {
  [Themes.Dark]: { bg: 'black', fg: 'white', accent: 'black' },
  [Themes.White]: { bg: 'rgb(238, 237, 233)', fg: 'black', accent: 'white' }
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
