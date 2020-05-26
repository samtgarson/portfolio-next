import * as React from 'react'
import { NavBar } from './nav-bar'
import styled from '@emotion/styled'
import { bigScreen, smallScreen, padding } from '~/styles/vars'
import { dot, line } from '~/styles/mixins'

const Footer = styled.footer({
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

  ...dot(`0.7rem`),

  a: {
    textDecoration: `none`,
    fontSize: `0.9rem`,
    pointerEvents: `auto`,
    [bigScreen]: {
      ...line(`after`)
    },
    [smallScreen]: {
      marginRight: padding / 2
    }
  }
})

export const Frame = () => {

  return (
    <>
      <NavBar />
      <Footer>
        <a href="#contact">Get in touch</a>
      </Footer>
    </>
  )
}
