import * as React from 'react'
import { NavBar } from './nav-bar'
import styled from '@emotion/styled'
import { bigScreen, smallScreen, padding } from '~/styles/vars'
import { dot, line } from '~/styles/mixins'
import { Colors, Theme } from '~/styles/theme'

const Wrapper = styled.div({
  zIndex: 100,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  pointerEvents: 'none',

  '*': {
    pointerEvents: 'auto'
  }
})

const Footer = styled.footer((props: Colors) => ({
  position: 'fixed',
  right: padding / 2,
  width: '100vh',
  height: padding,
  padding: `0 ${padding}px`,
  bottom: -padding,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  transform: 'rotate(90deg)',
  transformOrigin: '100% 0%',
  ...dot(props.fg, '0.7rem'),

  a: {
    textDecoration: 'none',
    [bigScreen]: {
      ...line(props.fg, 'after')
    },
    [smallScreen]: {
      marginRight: padding / 2
    }
  }
}))

export const Frame = () => {
  const { colors } = Theme.useContainer()

  return (
    <Wrapper>
      <NavBar />
      <Footer {...colors}>
        <a href="#contact">Get in touch</a>
      </Footer>
    </Wrapper>
  )
}
