import * as React from 'react'
import styled from '@emotion/styled'
import { Appear } from '~/components/appear'
import { Disappear } from '~/components/disappear'
import { staticFontSize } from '~/styles/mixins'

const Wrapper = styled.div({
  position: `relative`,
  height: `100vh`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  flexDirection: `column`
})

const Title = styled(Appear)({
  fontSize: staticFontSize(8)
})

const intro = ['I build', 'teams', 'that build', 'things.']

export const Intro = () => (
  <>
    <Disappear friction={0.8} height={400}>
    </Disappear>
    <Disappear>
      <Wrapper>
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
    </Disappear>
  </>
)
