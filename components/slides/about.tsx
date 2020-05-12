import * as React from 'react'
import styled from '@emotion/styled'
import { useThemedSection } from '~/util/use-themed-section'
import { Themes } from '~/styles/theme'

const Wrapper = styled.div({
  position: `relative`,
  margin: `0 auto`,
  width: `100vw`,
  minHeight: `100vh`,
  display: `flex`,
  flexFlow: `row wrap`,
  alignItems: `flex-end`
})

const Subtitle = styled.p({
  fontVariationSettings: `'wdth' 100, 'wght' 100`,
  fontWeight: `bold`,
  fontSize: `1.2rem`,
  marginBottom: 20
})

const AboutParagraph = styled.div({
  flex: `0 1 460px`,
  padding: `0 30px`,
  fontSize: `1.2rem`,
  fontVariationSettings: `'wdth' 30, 'wght' 0`,
  lineHeight: 1.5
})

const Highlights = styled.div({
  flex: `1 0 300px`,
  maxWidth: `1005`,
  alignSelf: `stretch`
})

const Highlight = styled.p({
  fontSize: `20vh`
})


export const About = () => {
  const wrapperRef = useThemedSection(Themes.Dark)

  return (
    <Wrapper ref={wrapperRef}>
      <AboutParagraph>
        <p>👋 Hey there. I&apos;m a product focused tech lead in London, with a background in architecture and user experience, currently helping <a href="https://sohohouse.com">Soho House</a> build digital products and a culture and model to support them.</p>
        <p>I&apos;m learning about digital products, the teams that build them and how they change our society; and in particular how to foster a culture in which effective and considered digital work can be done.</p>
        <p>I&apos;ve worked from macro to micro—from strategy, transformation and innovation, through user experience and solution architecture down to pixels and code.</p>
        <p>I&apos;m not looking for work right now but my <a href="#contact">inbox is open</a> for a coffee ✌️</p>
      </AboutParagraph>
      <Highlights>
        Hello
      </Highlights>
    </Wrapper>
  )
}

