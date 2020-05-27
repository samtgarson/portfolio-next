import React, { useState, useEffect, useRef } from 'react'
import styled from "@emotion/styled"
import { staticFontSize } from "~/styles/mixins"
import { Highlight } from '~/components/highlight'
import { useIntersection, intersectionEnabled } from '~/util/use-intersection'
import { css } from '@emotion/css'
import { Star } from '../field/star'

const HighlightsWrapper = styled.div({
  padding: 30,
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
  const wrapperRef = useRef(null)
  const inView = useIntersection(wrapperRef, { threshold: 0.5 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!intersectionEnabled) return setVisible(true)
    if (!inView) return

    setVisible(inView.isIntersecting || inView.boundingClientRect.y <= 0)
  }, [inView])

  return (
    <>
      <HighlightsWrapper ref={wrapperRef}>
        <Subtitle>Hey there. I&apos;m a</Subtitle>
        { ['London based', 'product focused', 'tech lead'].map((t, i) =>
          <Highlight key={t} text={t} delay={i * 0.3} visible={visible}/>
        ) }
      </HighlightsWrapper>
      <HighlightsWrapper>
        <Subtitle>I&apos;m currently living in London helping <a href="https://sohohouse.com">Soho House</a> build digital products and a culture to support them.</Subtitle>
        <Subtitle className={css({ marginLeft: `auto` })}>Lately I&apos;ve been thinking a lot about digital transformation and helping teams create an environment safe for building value and innovating
          {visible && <Punct size="1em" symbol="Hexagon" /> }
        </Subtitle>
      </HighlightsWrapper>
    </>
  )
}
