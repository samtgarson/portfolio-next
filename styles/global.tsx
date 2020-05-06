import * as React from 'react'
import { Global } from '@emotion/react'
import { Theme } from './theme'

export const GlobalStyles = () => {
  const { colors } = Theme.useContainer()

  return (
    <Global
      styles={{
        'html, body': {
          backgroundColor: colors.bg,
          color: colors.fg,
          fontFamily: 'studiofeixen-variable, serif',
          fontSize: '12px',
          fontVariationSettings: `'wdth' 0, 'wght' 0`,
          margin: 0,
          minHeight: '100%',
          padding: 0
        },
        '*': {
          transition: '.2s color ease, .2s background-color ease'
        },
        a: {
          color: 'inherit'
        }
      }}
    />
  )
}
