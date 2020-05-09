import * as React from 'react'
import styled from '@emotion/styled'
import { Appear } from '~/components/appear'

const Wrapper = styled.div({
  position: `relative`,
  marginTop: `45vh`,
  textAlign: `center`,
  transform: `translateY(-50%)`
})

const Title = styled(Appear)({
  fontSize: `max(8vw, 9vh)`
})

const Subtitle = styled(Appear)({
  fontVariationSettings: `'wdth' 100, 'wght' 100`,
  fontWeight: `bold`,
  fontSize: `1.2rem`,
  marginBottom: 20
})

const intro = ['I build', 'teams', 'that build', 'things.']

export const Intro = () => {
  return (
    <Wrapper>
      <Subtitle text={'\u270c Hey there'} align='center'/>
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
    </Wrapper>
  )
}
