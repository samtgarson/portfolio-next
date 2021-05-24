import React from 'react'
import styled from "@emotion/styled"
import { staticFontSize } from "~/styles/mixins"
import { padding } from '~/styles/vars'
import { Highlight } from '~/components/highlight'
import { useVisibleElement } from '~/util/use-intersection'
import { Star } from '../star'

const HighlightsWrapper = styled.section({
  padding,
  position: `relative`,
  marginBottom: `10vh`
})

const Subtitle = styled.p({
  fontSize: staticFontSize(3.6),
  marginBottom: 20,
  width: `60vw`,
  minWidth: `min(600px, 100%)`
})

const Punct = styled(Star)({
  verticalAlign: `middle`,
  marginLeft: `0.3em`
})

export const Highlights = () => {
  const { ref, visible } = useVisibleElement({ threshold: 0.5 })

  return (
    <>
      <HighlightsWrapper tabIndex={0} ref={ref}>
        <Subtitle>Hey there. I&apos;m a</Subtitle>
        { ['London based', 'product focused', 'tech lead.'].map((t, i) =>
          <Highlight key={t} text={t} delay={i * 0.3} visible={visible}/>
        ) }
      </HighlightsWrapper>
      <HighlightsWrapper>
        <Subtitle>I&apos;m currently living in London helping <a href="https://progressionapp.com">Progression</a> build a tech team and find product market fit.</Subtitle>
        <Subtitle style={{ marginLeft: `auto` }}>I enjoy helping teams work with intention and agency, and create an environment safe for innovating and building value
          {visible && <Punct size={ 60 } /> }
        </Subtitle>
      </HighlightsWrapper>
    </>
  )
}
