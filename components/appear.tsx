import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Theme } from '~/styles/theme'
import { textStroke } from '~/styles/mixins'
import { cx, css } from '@emotion/css'
import { stretchAnimation, popUpAnimation } from '~/styles/animations'

const Line = styled.div({
  overflow: `hidden`,
  display: `flex`,
  '&.stretch': stretchAnimation
})

const Letter = styled.div({
  '&:not(.reverse)': popUpAnimation
})

type AppearProps = {
  text:       string
  visible?:   boolean
  className?: string
  delay?:     number
  align?:     'center' | 'flex-start' | 'flex-end'
  stretch?:   boolean
  outline?:   boolean
}

export const Appear = ({ text, visible = true, className = '', delay = 0, align = 'flex-start', outline, stretch }: AppearProps) => {
  const { colors } = Theme.useContainer()
  const arr = useMemo(() => Array.from(text), [text])

  const lineStyles = useMemo(() => ({
    color: outline ? colors.bg : colors.fg,
    animationDelay: `${delay}s`,
    justifyContent: align,
    ...(outline ? textStroke(colors.fg) : {})
  }), [delay, align, colors])

  if (!visible) return null
  return (
    <Line className={cx(className, css(lineStyles), { stretch, reverse: !visible  })}>{
      arr.map((s, i) => (
        <Letter key={`${text}-${i}`} style={{ animationDelay: `${delay + i * 0.05}s`, '--initial-rotate': `0deg` }}>
          {s === ' ' ? `\u00a0` : s}
        </Letter>
      ))
    }</Line>
  )
}
