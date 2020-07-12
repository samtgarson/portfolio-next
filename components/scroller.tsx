import React, { FunctionComponent, memo } from "react"
import styled from "@emotion/styled"
import { padding } from "~/styles/vars"
import { staticFontSize } from '~/styles/mixins'
import { scrollAnimation } from "~/styles/animations"

type ScrollerProps = {
  text: string
  className?: string
}

const COUNT = 6

const ScrollerWrapper = styled.div({
  overflow: `hidden`,
  textTransform: `uppercase`,
  position: `relative`,
  h3: {
    position: `relative`,
    width: `fit-content`,
    display: `flex`,
    fontSize: staticFontSize(1.2),
    fontVariationSettings: `'wght' 400, 'wdth' 100`,
    ...scrollAnimation(COUNT)
  },
  span: {
    whiteSpace: `nowrap`,
    padding: `0 ${padding}px`
  }
})

export const Scroller: FunctionComponent<ScrollerProps> = ({ text, className }) => (
  <ScrollerWrapper className={className}>
    <h3 aria-label={text}>
      {[...Array(COUNT)].map((_, i) => (
        <span aria-hidden={true} key={i}>{text}</span>
      ))}
    </h3>
  </ScrollerWrapper>
)

