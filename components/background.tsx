import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import { Theme } from "~/styles/theme"
import { css } from '@emotion/css'

const INITIAL_SIZE = 10
const DURATION = 0.3

const Circle = styled.div({
  zIndex: 0,
  pointerEvents: `none`,
  position: `fixed`,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

    /* clipPath: `circle(${INITIAL_SIZE}px at 40px 35px)` */
    /* clipPath: `circle(${size * 2}px at 30px 30px)`, */

export const Background = () => {
  const { colors } = Theme.useContainer()
  const [size, setSize] = useState(0)

  useEffect(() => {
    // pythag to get the diagonal size of the window
    setSize(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2))
  }, [colors])

  return (
    <Circle
      className={css({ backgroundColor: colors.bg })}
      key={colors.bg}
    />
  )
}
