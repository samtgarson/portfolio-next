import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import { useThemedSection } from "~/util/use-themed-section"
import { Themes, Theme } from "~/styles/theme"
import { staticFontSize } from "~/styles/mixins"
import { Highlight } from '~/components/highlight'
import { useIntersection } from '~/util/use-intersection'

const HighlightsWrapper = styled.div({
  padding: `30px 0 30px 30px`,
  position: `relative`
})

const Subtitle = styled.p({
  fontSize: staticFontSize(3),
  marginBottom: 20,
  fontVariationSettings: `'wdth' 30, 'wght' 50`
})

const highlights = ['London based', 'product focused', 'tech lead']
export const Highlights = () => {
  const wrapperRef = useThemedSection(Themes.Dark)
  const { colors } = Theme.useContainer()
  const inView = useIntersection(wrapperRef, { threshold: 0.5 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!inView) return

    setVisible(inView.isIntersecting)
  }, [inView])

  return (
    <HighlightsWrapper ref={wrapperRef}>
      <Subtitle css={{ color: colors.fg }}>Hey there. I&apos;m a</Subtitle>
      { highlights.map((t, i) =>
        <Highlight key={t} text={t} delay={i * 0.3} css={{ paddingLeft: `${i * 3}vh` }} visible={visible}/>
      ) }
    </HighlightsWrapper>
  )
}
