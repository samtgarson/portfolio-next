import React, { useMemo, useRef, useEffect } from 'react'
import styled from "@emotion/styled"
import { Theme } from "~/styles/theme"
import { SwitchTransition, Transition } from 'react-transition-group'
import { ENTERING } from 'react-transition-group/Transition'

const DURATION = 400

const Circle = styled.div({
  zIndex: -1,
  pointerEvents: `none`,
  position: `fixed`,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  transition: `transform ${DURATION}ms ease-in-out`,
  transformOrigin: `0`
})

const createInitialStyle = (backgroundColor: string) => ({ transform: `scaleX(0)`, backgroundColor })
const createDefaultStyle = (backgroundColor: string) => ({ transform: `scaleX(1)`, backgroundColor })

export const Background = () => {
  const { colors } = Theme.useContainer()
  const initialStyle = useMemo(() => createInitialStyle(colors.bg), [colors])
  const defaultStyle = useMemo(() => createDefaultStyle(colors.bg), [colors])
  const counter = useRef(0)

  useEffect(() => {
    counter.current++
  }, [colors])

  return (
    <SwitchTransition mode='in-out'>
      <Transition
        key={`${colors.bg}-${counter.current}`}
        timeout={DURATION}
      >
        {state => <Circle style={state === ENTERING ? initialStyle : defaultStyle} />}
      </Transition>
    </SwitchTransition>
  )
}
