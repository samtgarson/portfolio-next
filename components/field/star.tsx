import * as React from 'react'
import { Point } from "./util"
import { FunctionComponent } from "react"
import styled from '@emotion/styled'
import { floatAnimation } from '~/styles/animations'
import { css } from '@emotion/css'

const StarWrapper = styled.div({
  overflow: `hidden`,
  position: `absolute`,
  fontFamily: `sans-serif`,
  ...floatAnimation
})

const StyledStar = styled.div({
  fontSize: `1rem`
})

type StarProps = {
  p: Point
  i: number
}

const symbols = ['\u25B4', '\u25CF', '\u25A0']
const symbol = (i: number) => symbols[i % symbols.length]
const delay = (i: number) => 1 + (i/2 * 0.3)

  /* initial: { */
  /*   y: `120%`, */
  /*   rotate: `-1080deg` */
  /* }, */
  /* animate: (i: number) => ({ */
  /*   y: 0, */
  /*   rotate: `${(i % 5) * 80}deg`, */
  /*   transition: { */
  /*     delay: delay(i) */
  /*   } */
  /* }) */

export const Star: FunctionComponent<StarProps> = ({ p: [x, y], i }) => (
  <StarWrapper style={{ left: x, top: y }} className={css({ animationDelay: `${delay(i)}s` })}>
    <StyledStar>
      { `${symbol(i)}` }
    </StyledStar>
  </StarWrapper>
)
