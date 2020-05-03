import * as React from 'react'
import { Global } from '@emotion/react'

export const globalStyles = (
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
        // fontFamily: 'studiofeixen, Helvetica, sans-serif',
        fontFamily: 'studiofeixen, serif',
        fontSize: '24px'
      }
    }}
  />
)

