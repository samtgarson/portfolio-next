import * as React from 'react'
import { Global } from '@emotion/react'
import { Theme, defaultTheme } from './theme'

export const GlobalStyles = () => {
  const { colors } = Theme.useContainer()

  return (
    <Global
      styles={{
        'html, body': {
          backgroundColor: defaultTheme.bg,
          color: colors.fg,
          fontFamily: 'studiofeixen-variable, serif',
          fontSize: '15px',
          fontVariationSettings: `'wdth' 0, 'wght' 0`,
          margin: 0,
          padding: 0,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
          '--fgColor': colors.fg,
          '--bgColor': colors.bg,
          '--accentColor': colors.accent
        },
        'p, h1, h2, h3, a, span': {
          transition: `.5s color ease`
        },
        a: {
          color: `inherit`,
          transition: `font-variation-settings .3s ease`
        },
        'a: hover': {
          fontVariationSettings: `'wdth' 100, 'wght' 0`
        }
      }}
    />
  )
}
