import * as React from 'react'
import { Global } from '@emotion/react'
import { Theme } from './theme'

export const GlobalStyles = () => {
  const { colors } = Theme.useContainer()

  return (
    <Global
      styles={{
        'html, body': {
          backgroundColor: `black`,
          color: colors.fg,
          fontFamily: 'studiofeixen-variable, serif',
          fontSize: '12px',
          fontVariationSettings: `'wdth' 0, 'wght' 0`,
          margin: 0,
          padding: 0
        },
        body: {
          perspective: 2
        },
        'p, h1, h2, h3, a, span': {
          transition: `.2s color ease`
        },
        a: {
          color: `inherit`
        }
      }}
    />
  )
}
