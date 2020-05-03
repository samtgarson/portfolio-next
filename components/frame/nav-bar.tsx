import * as React from 'react'
import { GitHub, Twitter, Instagram } from 'react-feather'
import styled from '@emotion/styled'
import { padding, smallScreen } from '~/styles/vars'
import { dot } from '~/styles/mixins'
import { Colors, Theme } from '~/styles/theme'

const Nav = styled.nav({
  position: 'fixed',
  top: padding,
  left: padding,
  right: padding,
  display: 'flex',
  flexFlow: 'row-nowrap',
  justifyContent: 'space-between'
})

const TitleWrapper = styled.div({
  display: 'flex',
  flexFlow: 'row-nowrap'
})

const Title = styled.h1((props: Colors) => ({
  ...dot(props.fg, '0.9em', 'before', { marginRight: '0.9em' }),
  lineHeight: '1em',
  fontVariationSettings: '"whgt" 100, "wdth" 100',
  textTransform: "uppercase",
  margin: 0
}))

const LinkWrapper = styled.div({
  a: {
    marginLeft: padding / 2
  },
  [smallScreen]: {
    display: 'flex',
    flexDirection: 'column',
    a: {
      marginBottom: padding / 2
    }
  }
})

export const NavBar = () => {
  const { colors } = Theme.useContainer()

  return (
    <Nav>
      <TitleWrapper>
        <Title {...colors}>Sam Garson</Title>
      </TitleWrapper>
      <LinkWrapper>
        <a href="https://github.com/samtgarson">
          <GitHub size="1.2em" color={colors.fg} />
        </a>
        <a href="https://twitter.com/samtgarson">
          <Twitter size="1.2em" color={colors.fg} />
        </a>
        <a href="https://instagram.com/samtgarson">
          <Instagram size="1.2em" color={colors.fg} />
        </a>
      </LinkWrapper>
    </Nav>
  )
}
