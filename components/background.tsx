import React, { useEffect, useState, useMemo } from 'react'
import styled from "@emotion/styled"
import { Theme } from "~/styles/theme"
import { SwitchTransition, Transition } from 'react-transition-group'
import { ENTERING } from 'react-transition-group/Transition'

const INITIAL_SIZE = 5
const DURATION = 800

const Circle = styled.div({
  zIndex: 0,
  pointerEvents: `none`,
  position: `fixed`,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  transition: `clip-path ${DURATION}ms ease-in`
})

const createInitialStyle = (backgroundColor: string) => ({ clipPath: `circle(${INITIAL_SIZE}px at 35px 35px)`, backgroundColor })
const createDefaultStyle = (size: number, backgroundColor: string) => ({ clipPath: `circle(${size * 2}px at 35px 35px)`, backgroundColor })

export const Background = () => {
  const { colors } = Theme.useContainer()
  const [size, setSize] = useState(0)
  const initialStyle = useMemo(() => createInitialStyle(colors.bg), [colors])
  const defaultStyle = useMemo(() => createDefaultStyle(size, colors.bg), [size, colors])

  useEffect(() => {
    // pythag to get the diagonal size of the window
    setSize(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2))
  }, [colors])

  return (
    <SwitchTransition mode='in-out'>
      <Transition
        key={colors.bg}
        timeout={DURATION / 2}
      >
        {state => <Circle style={state === ENTERING ? initialStyle : defaultStyle} />}
      </Transition>
    </SwitchTransition>
  )
}
