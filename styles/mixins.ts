import { CSSObject } from "@emotion/css"
import { padding, smallScreen } from "./vars"

export const staticFontSize = (n: number, m: number = n * 1.15) => `max(${n}vw, ${m}vh)`

export const dot = (
  color: string,
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
    backgroundColor: color,
    ...styles
  }
})

export const line = (
  color: string,
  position: 'before' | 'after' = 'after',
) => ({
  [`&::${position}`]: {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '1px',
    width: padding * 3,
    margin: `0 ${padding / 2}px`,
    backgroundColor: color
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

export const textStroke = (color: string) => ({
  textShadow: _textStroke(color, 1),
  [smallScreen]: {
    textShadow: _textStroke(color, 0.5)
  }
})
