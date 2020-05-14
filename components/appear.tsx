import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Theme } from '~/styles/theme'
import { textStroke } from '~/styles/mixins'
import { cx, css } from '@emotion/css'
import { stretchAnimation } from '~/styles/animations'

const Line = styled.div({
  overflow: `hidden`,
  display: `flex`,
  '&.stretch': stretchAnimation
})

      /* staggerChildren: 0.05, */
      /* delayChildren: delay, */
      /* delay */

    /* y: `120%` */
    /* y: 0 */

type AppearProps = {
  text: string
  visible?: boolean
  className?: string
  delay?: number
  align: 'center' | 'flex-start' | 'flex-end'
  stretch: boolean
  outline?: boolean
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

  return (
    <Line className={cx(className, css(lineStyles), { stretch })}>{
      arr.map((s, i) => (
        <div key={`${text}-${i}`}>
          {s === ' ' ? `\u00a0` : s}
        </div>
      ))
    }</Line>
  )
}
