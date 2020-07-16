import * as React from 'react'
import styled from '@emotion/styled'
import { Appear } from '~/components/appear'
import { staticFontSize } from '~/styles/mixins'
import { css } from '@emotion/css'
import dynamic from 'next/dynamic'


const Field = dynamic(async () => (await import('../field')).Field, { ssr: false })

const fieldStyles = css({
  position: `absolute`,
  top: `-100vh`,
  height: `300vh`,
  left: 0,
  right: 0
})

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
    <Field id="intro-field" className={ fieldStyles }/>
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
