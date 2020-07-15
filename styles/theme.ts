import { createContainer } from 'unstated-next'
import { useState, useMemo, useEffect } from 'react'

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

let running: boolean

const throttle = (fn: Function, ms: number) => () => {
  if (running) return
  running = true
  fn()
  setTimeout(() => { running = false }, ms)
}

const themes: Record<string, Colors> = {
  [Themes.Dark]: { bg: 'black', fg: 'white', accent: '#19191C' },
  [Themes.White]: { bg: '#EEEDE9', fg: 'black', accent: 'white' },
  [Themes.Bright]: { bg: '#1502ff', fg: 'white', accent: 'rgba(255, 255, 255, 0.1)' }
}

type Breaks = [number, Themes][]

const findBreak = (set: (t: Themes) => void, current: Themes, breaks: Breaks) => {
  let theme: Themes = defaultTheme
  const threshold = window.scrollY + window.innerHeight/2

  for (const [brk, color] of breaks) {
    if (brk < threshold) {
      theme = color
    } else {
      break
    }
  }

  if (current != theme) set(theme)
}

export const defaultTheme = Themes.White

const breaks: Breaks = []

const useTheme = () => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)
  const colors = useMemo(() => themes[theme], [theme])

  const setBreak = (brk: number, color: Themes) => {
    breaks.push([brk, color])
  }

  const scrollHandler = useMemo(
    () => throttle(() => findBreak(setTheme, theme, breaks), 300),
    [setTheme, theme]
  )

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true })
    scrollHandler()

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])


  return { colors, theme, setTheme, breaks, setBreak }
}

export const Theme = createContainer(useTheme)
