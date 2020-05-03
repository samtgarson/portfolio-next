import * as React from 'react'
import { Global } from '@emotion/react'
import { Theme } from './theme'

export const GlobalStyles = () => {
  const { colors } = Theme.useContainer()

  return (
    <Global
      styles={{
        '@font-face': {
          fontFamily: 'studiofeixen',
          src: `url('/fonts/studio-feixen.ttf') format('truetype')`
        },
        'html, body': {
          fontVariationSettings: `'wdth' 0, 'wght' 0`,
          margin: 0,
          padding: 0,
          minHeight: '100%',
          fontFamily: 'studiofeixen, serif',
          fontSize: '24px',
          backgroundColor: colors.bg,
          color: colors.fg
        },
        '*': {
          transition: '.2s color ease, .2s background-color ease'
        }
      }}
    />
  )
}
