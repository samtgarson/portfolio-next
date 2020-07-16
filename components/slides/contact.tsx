import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { css } from '@emotion/css'

const Field = dynamic(async () => (await import('../field')).Field, { ssr: false })

const fieldStyles = css({
  position: `absolute`,
  top: `-100vh`,
  height: `300vh`,
  left: 0,
  right: 0
})

const Wrapper = styled.section({
  position: `relative`,
  height: `100vh`,
  overflow: `hidden`,
  display: `flex`,
  flexFlow: `column nowrap`,
  justifyContent: `center`,
  alignItems: `center`,
  a: {
    fontSize: `2rem`,
    zIndex: 2
  }
})

export const Contact = () => {
  return (
    <Wrapper tabIndex={0} id="contact">
      <Field id="contact-field" className={ fieldStyles }/>
      <a href="mailto:sam@samgarson.com">sam@samgarson.com</a>
    </Wrapper>
  )
}
