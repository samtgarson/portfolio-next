import { CSSObject } from "@emotion/css"
import { padding, smallScreen } from "./vars"

export const fontSizes = {
  small: 3.6,
  body: 5.5,
  big: 8
}

export const staticFontSize = (n: number, m: number = n * 1.15) => `max(${n}vw, ${m}vh)`

export const dot = (
  size = '1em',
  position: 'before' | 'after' = 'after',
  styles: CSSObject = {}
) => ({
  [`&::${position}`]: {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: size,
    width: size,
    borderRadius: 50,
    backgroundColor: 'var(--fgColor)',
    ...styles
  }
})

export const line = (
  position: 'before' | 'after' = 'after',
) => ({
  [`&::${position}`]: {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '1px',
    width: padding * 3,
    margin: `0 ${padding / 2}px`,
    backgroundColor: 'var(--fgColor)'
  }
})

const _textStroke = (color: string, w: number) => `
  -${w}px -${w}px 0px ${color},
  -${w}px 0px 0px ${color},
  -${w}px ${w}px 0px ${color},
  0px -${w}px 0px ${color},
  0px ${w}px 0px ${color},
  ${w}px 0px 0px ${color},
  ${w}px ${w}px 0px ${color},
  ${w}px -${w}px 0px ${color}
`

export const textStroke = {
  textShadow: _textStroke('var(--fgColor)', 1),
  transition: `textShadow .2s ease`,
  [smallScreen]: {
    textShadow: _textStroke('var(--fgColor)', 0.5)
  }
}
