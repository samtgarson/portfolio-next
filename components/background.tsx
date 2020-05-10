import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import { Theme } from "~/styles/theme"
import { AnimatePresence, Variants, motion } from "framer-motion"

const INITIAL_SIZE = 40
const DURATION = 0.3

const Circle = styled(motion.div)({
  borderRadius: INITIAL_SIZE / 2,
  zIndex: -1,
  position: `fixed`,
  top: -50,
  left: -50,
  bottom: -50,
  right: -50
})

const variants: Variants = {
  initial: {
    clipPath: "circle(15px at 30px 30px)"
  },
  animate: (size: number) => ({
    clipPath: `circle(${size * 2 + 200}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 10
    }
  }),
  exit: (size: number) => ({
    clipPath: `circle(${size * 2 + 200}px at 30px 30px)`,
    transition: {
      duration: DURATION
    }
  })
}

export const Background = () => {
  const { colors } = Theme.useContainer()
  const [size, setSize] = useState(0)
  const [animate, setAnimate] = useState<string>('animate')

  /* useEffect(() => { */
  /*   setAnimate('animate') */
  /* }, []) */

  useEffect(() => {
    setSize(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2))
  }, [colors])

  return (
    <AnimatePresence initial={false}>
      <Circle
        style={{ backgroundColor: colors.bg }}
        key={colors.bg}
        custom={size}
        variants={variants}
        initial='initial'
        animate={animate}
        exit='exit'
      />
    </AnimatePresence>
  )
}
