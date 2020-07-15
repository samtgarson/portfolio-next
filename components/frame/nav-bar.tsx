import * as React from 'react'
import { GitHub, Twitter, Instagram } from 'react-feather'
import styled from '@emotion/styled'
import { padding, smallScreen } from '~/styles/vars'
import { dot } from '~/styles/mixins'

const Nav = styled.nav({
  position: `fixed`,
  top: padding,
  left: padding,
  right: padding,
  display: `flex`,
  flexFlow: `row-nowrap`,
  justifyContent: `space-between`,
  zIndex: 100
})

const TitleWrapper = styled.div({
  display: `flex`,
  flexFlow: `row-nowrap`
})

const Title = styled.p({
  ...dot(`0.9em`, `before`, { marginRight: `0.9em` }),
  lineHeight: `1em`,
  fontVariationSettings: `'wght' 400, 'wdth' 100`,
  textTransform: `uppercase`,
  fontSize: `0.9rem`,
  margin: 0
})

const LinkWrapper = styled.div({
  a: {
    marginLeft: padding / 2
  },
  [smallScreen]: {
    display: `flex`,
    flexDirection: `column`,
    a: {
      marginBottom: padding / 2
    }
  }
})

export const NavBar = () => (
  <Nav>
    <TitleWrapper>
      <Title>Sam Garson</Title>
    </TitleWrapper>
    <LinkWrapper>
      <a href="https://github.com/samtgarson" aria-label="Github Profile">
        <GitHub size="1em" color="currentColor" />
      </a>
      <a href="https://twitter.com/samtgarson" aria-label="Twitter Profile">
        <Twitter size="1em" color="currentColor" />
      </a>
      <a href="https://instagram.com/samtgarson" aria-label="Instagram Profile">
        <Instagram size="1em" color="currentColor" />
      </a>
    </LinkWrapper>
  </Nav>
)
