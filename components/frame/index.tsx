import * as React from 'react'
import { NavBar } from './nav-bar'
import styled from '@emotion/styled'
import { bigScreen, smallScreen, padding } from '~/styles/vars'
import { dot, line } from '~/styles/mixins'
import { Colors, Theme } from '~/styles/theme'

const Footer = styled.footer((props: Colors) => ({
  position: `fixed`,
  right: padding / 2,
  bottom: 0,
  width: `100vh`,
  height: padding,
  padding: `0 ${padding}px`,
  zIndex: 100,
  pointerEvents: `none`,

  display: `flex`,
  flexFlow: `row nowrap`,
  justifyContent: `flex-end`,
  alignItems: `center`,

  transform: `rotate(90deg)`,
  transformOrigin: `100% 0%`,

  ...dot(props.fg, `0.7rem`),

  a: {
    textDecoration: `none`,
    fontSize: `0.9rem`,
    pointerEvents: `auto`,
    [bigScreen]: {
      ...line(props.fg, `after`)
    },
    [smallScreen]: {
      marginRight: padding / 2
    }
  }
}))

export const Frame = () => {
  const { colors } = Theme.useContainer()

  return (
    <>
      <NavBar />
      <Footer {...colors}>
        <a href="#contact">Get in touch</a>
      </Footer>
    </>
  )
}
