import React from 'react'
import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'
import { Theme } from '~/styles/theme'
import { textStroke } from '~/styles/mixins'

type AppearOpts = {
  delay?: number
  align: 'center' | 'flex-start' | 'flex-end'
  stretch: boolean
}

const Line = styled(motion.div)({
  overflow: `hidden`,
  display: `flex`
})

const frameVariants: Variants = {
  initial: ({ align, stretch }: AppearOpts) => ({
    justifyContent: align,
    fontVariationSettings: stretch ? `'wdth' 100, 'wght' 0` : `inherit`
  }),
  animate: ({ delay = 0, stretch }: AppearOpts) => ({
    fontVariationSettings: stretch ? [`'wdth' 100, 'wght' 0`, `'wdth' -80, 'wght' 0`, `'wdth' 100, 'wght' 0`] : `inherit`,
    transition: {
      staggerChildren: 0.05,
      loop: `Infinity`,
      delayChildren: delay,
      delay,
      ease: `anticipate`,
      duration: 3
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

export const Appear = ({ text, visible = true, className = '', delay, align, outline, stretch }: AppearProps) => {
  const { colors } = Theme.useContainer()
  const arr = React.useMemo(() => Array.from(text), [text])

  return (
    <Line
      className={[className, stretch ? `stretch` : ''].join(' ')}
      variants={frameVariants}
      custom={{ align, delay, stretch }}
      animate={ visible ? `animate` : `initial` }
      initial='initial'
    >{
      arr.map((s, i) => (
        <motion.div
          style={{
            color: outline ? colors.bg : colors.fg,
            ...(outline ? textStroke(colors.fg) : {})
          }}
          variants={childVariants}
          key={`${text}-${i}`}
        >
          {s === ' ' ? `\u00a0` : s}
        </motion.div>
      ))
    }</Line>
  )
}
