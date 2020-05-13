import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import { useThemedSection } from "~/util/use-themed-section"
import { Themes } from "~/styles/theme"
import { staticFontSize } from "~/styles/mixins"
import { Highlight } from '~/components/highlight'
import { useIntersection } from '~/util/use-intersection'
import { css } from '@emotion/css'

const HighlightsWrapper = styled.div({
  padding: `30px 0 30px 30px`,
  position: `relative`,
  marginBottom: `10vh`
})

const Subtitle = styled.p({
  fontSize: staticFontSize(3),
  marginBottom: 20,
  fontVariationSettings: `'wdth' 30, 'wght' 50`
})

const highlights = ['London based', 'product focused', 'tech lead']
export const Highlights = () => {
  const wrapperRef = useThemedSection(Themes.Dark)
  const inView = useIntersection(wrapperRef, { threshold: 0.5 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!inView) return

    setVisible(inView.isIntersecting)
  }, [inView])

  return (
    <>
      <HighlightsWrapper ref={wrapperRef}>
        <Subtitle>Hey there. I&apos;m a</Subtitle>
        { highlights.map((t, i) =>
          <Highlight key={t} text={t} delay={i * 0.3} visible={visible}/>
        ) }
      </HighlightsWrapper>
      <HighlightsWrapper>
        <Subtitle>Subtitle</Subtitle>
      </HighlightsWrapper>
    </>
  )
}
