import * as React from 'react'
import { Point } from "./tools"
import { FunctionComponent } from "react"
import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'

const StarWrapper = styled(motion.div)({
  overflow: `hidden`,
  position: `absolute`,
  fontFamily: `sans-serif`
})

const StyledStar = styled(motion.div)({
  fontSize: `0.9rem`
})

type StarProps = {
  p: Point
  i: number
}

const symbols = ['\u25B4', '\u25CF', '\u25A0']
const symbol = (i: number) => symbols[i % symbols.length]

const wrapperVariants: Variants = {
  initial: {},
  animate: (i: number) => ({
    y: [-3, 3, -3],
    transition: {
      duration: 3,
      loop: `Infinity`,
      delay: 1 + i * 0.5,
      ease: `easeInOut`
    }
  })
}

const variants: Variants = {
  initial: {
    y: `120%`,
    rotate: `720deg`
  },
  animate: (i: number) => ({
    y: 0,
    rotate: `${(i % 5) * 80}deg`,
    transition: {
      delay: 1 + i * 0.5
    }
  })
}

export const Star: FunctionComponent<StarProps> = ({ p: [x, y], i }) => (
  <StarWrapper style={{ left: x, top: y }} custom={i} variants={wrapperVariants} animate='animate' initial='initial'>
    <StyledStar variants={variants} custom={i}> { `${symbol(i)}` }</StyledStar>
  </StarWrapper>
)
