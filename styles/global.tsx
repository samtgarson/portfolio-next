import * as React from 'react'
import { Global } from '@emotion/react'
import { Theme } from './theme'

export const GlobalStyles = () => {
  const { colors } = Theme.useContainer()

  return (
    <Global
      styles={{
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
          scrollBehavior: `smooth`,
          '--fgColor': colors.fg,
          '--bgColor': colors.bg,
          '--accentColor': colors.accent
        },
        a: {
          color: `inherit`,
          transition: `.3s font-variation-settings ease, .2s border ease, .2s padding ease`,
          display: `inline-block`,
          border: `1px solid transparent`
        },
        'a:hover': {
          fontVariationSettings: `'wdth' 100, 'wght' 0`
        },
        'a:focus': {
          fontVariationSettings: `'wdth' 100, 'wght' 0`,
          outline: `none`,
          border: `1px solid currentColor`,
          padding: `0 2px`
        },
        p: {
          lineHeight: 1.8
        }
      }}
    />
  )
}
