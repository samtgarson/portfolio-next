import React from 'react'
import { Themes } from "~/styles/theme"
import { useThemedSection } from "~/util/use-themed-section"
import styled from "@emotion/styled"

type ThemeDividerProps = {
  before: Themes
  after: Themes
}

const Divider = styled.div({
  width: `100%`,
  height: 1
})

export const ThemeDivider = ({ before, after }: ThemeDividerProps) => {
  const ref = useThemedSection(before, after)

  return <Divider ref={ref} />
}
