import React, { useMemo, memo } from 'react'
import styled from '@emotion/styled'
import { textStroke } from '~/styles/mixins'
import { cx } from '@emotion/css'
import { stretchAnimation, popUpAnimation, popUpFrom, popUpTo } from '~/styles/animations'

const Line = styled.span(
  ({ delay, align }: Pick<AppearProps, "align" | "delay">) => ({
    overflow: `hidden`,
    display: `flex`,
    '&.stretch': stretchAnimation(delay),
    '&.outline': textStroke,
    justifyContent: align
  })
)

const Letter = styled.span({
  '--initial-rotate': `0deg`,
  transform: popUpFrom,
  transition: `.2s transform ${popUpAnimation.animationTimingFunction}, .5s color ease, .2s textShadow ease`,
  '.visible &': { transform: popUpTo }
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

export const _Appear = ({ text, visible = true, className = '', delay = 0, align = 'flex-start', outline, stretch }: AppearProps) => {
  const arr = useMemo(() => Array.from(text), [text])

  return (
    <Line className={cx(className, { stretch, visible, outline })} delay={delay} align={align} aria-label={text} >{
      arr.map((s, i) => (
        <Letter key={`${text}-${i}`} style={{ transitionDelay: `${delay + i * 0.05}s, 0s, 0s` }} aria-hidden="true">
          {s === ' ' ? `\u00a0` : s}
        </Letter>
      ))
    }</Line>
  )
}

export const Appear = memo(_Appear)
