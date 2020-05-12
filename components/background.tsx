import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import { Theme } from "~/styles/theme"
import { AnimatePresence, Variants, motion } from "framer-motion"

const INITIAL_SIZE = 40
const DURATION = 0.3

const Circle = styled(motion.div)({
  zIndex: 0,
  pointerEvents: `none`,
  position: `fixed`,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

const variants: Variants = {
  initial: {
    clipPath: `circle(${INITIAL_SIZE}px at 30px 30px)`
  },
  animate: (size: number) => ({
    clipPath: `circle(${size * 2}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 10
    }
  }),
  exit: (size: number) => ({
    clipPath: `circle(${size * 2}px at 30px 30px)`,
    transition: {
      duration: DURATION
    }
  })
}

export const Background = () => {
  const { colors } = Theme.useContainer()
  const [size, setSize] = useState(0)

  useEffect(() => {
    // pythag to get the diagonal size of the window
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
        animate='animate'
        exit='exit'
      />
    </AnimatePresence>
  )
}
