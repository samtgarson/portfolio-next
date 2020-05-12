import styled from '@emotion/styled'
import { Appear } from './appear'
import { staticFontSize } from '~/styles/mixins'
import React, { FunctionComponent } from 'react'

const Title = styled(Appear)({
  fontSize: staticFontSize(8, 5),
  flex: `0 0 auto`,
  marginRight: 10
})

const HighlightWrapper = styled.div({
  overflow: `hidden`,
  display: `flex`,
  flexFlow: `row nowrap`
})

type HighlightProps = {
  text: string
  delay?: number
}

export const Highlight: FunctionComponent<HighlightProps> = ({ text, delay = 0, ...props }) => {
  return (
    <HighlightWrapper {...props}>
      <Title
        outline={true}
        stretch={true}
        text={text}
        delay={delay}
      />
      <Title delay={delay + 0.1} text={text} />
    </HighlightWrapper>
  )
}

