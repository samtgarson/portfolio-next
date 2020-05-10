import * as React from 'react'
import styled from '@emotion/styled'
import { Appear } from '~/components/appear'
import { useThemedSection } from '~/util/use-themed-section'
import { Themes } from '~/styles/theme'

const Wrapper = styled.div({
  position: `relative`,
  margin: `0 auto`,
  padding: `30px`,
  maxWidth: 500,
  minHeight: `100vh`
})

const Subtitle = styled(Appear)({
  fontVariationSettings: `'wdth' 100, 'wght' 100`,
  fontWeight: `bold`,
  fontSize: `1.2rem`,
  marginBottom: 20
})

export const About = () => {
  const wrapperRef = useThemedSection(Themes.White)

  return (
    <Wrapper ref={wrapperRef}>
      <Subtitle text='👋 Hey there' align='center'/>
      <p>I&apos;m a product focused tech lead in London, with a background in architecture and user experience, currently helping <a href="https://sohohouse.com">Soho House</a> build digital products and a culture and model to support them.</p>
      <p>I&apos;m learning about digital products, the teams that build them and how they change our society; and in particular how to foster a culture in which effective and considered digital work can be done.</p>
      <p>I&apos;ve been lucky enough to work with teams at —from strategy, transformation and innovation, through user experience and solution architecture down to pixels and code.</p>
      <p>I&apos;m not looking for work right now but I&apos;m always eager to have conversations (sometimes arguments) about this stuff, preferably over coffee or whiskey—my <a href="#contact">inbox is open</a> ✌️</p>

    </Wrapper>
  )
}

