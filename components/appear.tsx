import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { textStroke } from '~/styles/mixins'
import { cx, css } from '@emotion/css'
import { stretchAnimation, popUpAnimation } from '~/styles/animations'

const Line = styled.div({
  overflow: `hidden`,
  display: `flex`,
  '&.stretch': stretchAnimation
})

const Letter = styled.div({
  transform: `translateY(120%) rotate(var(--initial-rotate, -360deg))`,
  '.visible &': popUpAnimation
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
  const arr = useMemo(() => Array.from(text), [text])

  const lineStyles = useMemo(() => ({
    color: outline ? `var( --accentColor )` : `var( --fgColor )`,
    animationDelay: `${delay}s`,
    justifyContent: align,
    ...(outline ? textStroke : {})
  }), [delay, align])

  return (
    <Line className={cx(className, css(lineStyles), { stretch, visible })}>{
      arr.map((s, i) => (
        <Letter key={`${text}-${i}`} style={{ animationDelay: `${delay + i * 0.05}s`, '--initial-rotate': `0deg` }}>
          {s === ' ' ? `\u00a0` : s}
        </Letter>
      ))
    }</Line>
  )
}
