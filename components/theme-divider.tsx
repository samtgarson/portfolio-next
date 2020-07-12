import React, { useRef, useEffect } from 'react'
import { Themes, Theme } from "~/styles/theme"
import styled from "@emotion/styled"

type ThemeDividerProps = {
  theme: Themes
}

const Divider = styled.div({
  width: `100%`,
  height: 1
})

export const ThemeDivider = ({ theme }: ThemeDividerProps) => {
  const { setBreak } = Theme.useContainer()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    setBreak(ref.current.offsetTop, theme)
  }, [])

  return <Divider className="theme-divider" ref={ref} />
}
