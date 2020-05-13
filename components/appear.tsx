import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'
import { Theme } from '~/styles/theme'
import { textStroke } from '~/styles/mixins'
import { cx, css } from '@emotion/css'
import { stretchAnimation } from '~/styles/animations'

type AppearOpts = {
  delay?: number
  align: 'center' | 'flex-start' | 'flex-end'
  stretch: boolean
}

const Line = styled(motion.div)({
  overflow: `hidden`,
  display: `flex`,
  '&.stretch': stretchAnimation
})

const frameVariants: Variants = {
  initial: {},
  animate: ({ delay = 0 }: AppearOpts) => ({
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
      delay
    }
  })
}

const childVariants: Variants = {
  initial: {
    y: `120%`
  },
  animate: {
    y: 0
  }
}

type AppearProps = {
  text: string
  visible?: boolean
  className?: string
  align?: AppearOpts['align']
  delay?: AppearOpts['delay']
  outline?: boolean
  stretch?: boolean
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
    <Line
      className={cx(className, css(lineStyles), { stretch })}
      variants={frameVariants}
      custom={{ delay }}
      animate={ visible ? `animate` : `initial` }
      initial='initial'
    >{
      arr.map((s, i) => (
        <motion.div
          variants={childVariants}
          key={`${text}-${i}`}
        >
          {s === ' ' ? `\u00a0` : s}
        </motion.div>
      ))
    }</Line>
  )
}
