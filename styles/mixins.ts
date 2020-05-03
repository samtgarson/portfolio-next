import { CSSObject } from "@emotion/css"
import { padding } from "./vars"

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
