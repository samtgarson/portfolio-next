import * as React from 'react'
import styled from '@emotion/styled'
import { Appear } from '~/components/appear'
import { staticFontSize } from '~/styles/mixins'

const Wrapper = styled.header({
  position: `relative`,
  height: `100vh`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  flexDirection: `column`
})

const Title = styled(Appear)({
  fontSize: staticFontSize(8),
  fontWeight: `normal`
})

const intro = ['I build', 'teams', 'that build', 'things.']

export const Intro = () => (
  <Wrapper tabIndex={0}>
    <h1>
      { intro.map((t, i) => (
        <Title
          outline={i % 2 === 0}
          stretch={i % 2 !== 0}
          text={t}
          delay={(i + 1) * 0.3}
          align='center'
          key={i}
        />
      ))}
    </h1>
  </Wrapper>
)
