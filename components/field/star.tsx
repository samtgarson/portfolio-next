import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { popUpAnimation, floatAnimation } from '~/styles/animations'
import symbols, { FieldSymbolProps } from './symbols'

const StarWrapper = styled.span({
  overflow: `hidden`,
  fontFamily: `sans-serif`,
  display: `inline-block`,
  ...floatAnimation
})

const StyledStar = styled.span({
  display: `inline-block`,
  ...popUpAnimation
})

type StarProps = FieldSymbolProps & {
  symbol: keyof typeof symbols
  className?: string
}

export const Star = ({ symbol, className, ...symbolProps }: StarProps) => {
  const Symbol = useMemo(() => symbols[symbol], [symbol])
  const elem = useMemo(() => (
    <StarWrapper  className={className}>
      <StyledStar className='star'>
        <Symbol {...symbolProps} />
      </StyledStar>
    </StarWrapper>
  ), [symbol])

  return elem
}
