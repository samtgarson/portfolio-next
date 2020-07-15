import * as React from 'react'
import { Global } from '@emotion/react'
import { Theme } from './theme'

export const GlobalStyles = () => {
  const { colors } = Theme.useContainer()

  return (
    <Global
      styles={{
        '@font-face': {
          fontDisplay: `swap`,
          fontFamily: 'studiofeixen-variable',
          src: `url('/fonts/feixen.ttf') format('truetype')`,
          fontWeight: `normal`,
          fontStyle: `normal`,
          fontVariationSettings: `"wght" 400, "AWKD" 0, "wdth" 0, "STYL" 0, "MONO" 0`
        },
        'html, body': {
          color: colors.fg,
          fontFamily: 'studiofeixen-variable, sans-serif',
          fontSize: '15px',
          lineHeight: 1.3,
          fontVariationSettings: `'wdth' 0, 'wght' 0`,
          margin: 0,
          padding: 0,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
          transition: `.5s color ease`,
          '--fgColor': colors.fg,
          '--bgColor': colors.bg,
          '--accentColor': colors.accent
        },
        a: {
          color: `inherit`,
          transition: `font-variation-settings .3s ease`
        },
        'a: hover': {
          fontVariationSettings: `'wdth' 100, 'wght' 0`
        },
        p: {
          lineHeight: 1.8
        }
      }}
    />
  )
}
