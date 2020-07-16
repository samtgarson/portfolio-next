import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { popUpAnimation, floatAnimation } from '~/styles/animations'
import { cx } from '@emotion/css'

const Hexagon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M127.5 37.1754C130.903 35.2105 135.097 35.2105 138.5 37.1754L213.237 80.3246C216.64 82.2895 218.737 85.9209 218.737 89.8509V176.149C218.737 180.079 216.64 183.71 213.237 185.675L138.5 228.825C135.097 230.79 130.903 230.79 127.5 228.825L52.7635 185.675C49.3601 183.71 47.2635 180.079 47.2635 176.149V89.8509C47.2635 85.9209 49.3601 82.2895 52.7635 80.3246L127.5 37.1754Z" fill="currentColor"/>
  </svg>
)

const StarWrapper = styled.span({
  overflow: `hidden`,
  fontFamily: `sans-serif`,
  display: `inline-block`,
  '&.float': floatAnimation
})

const StyledStar = styled(Hexagon)({
  display: `inline-block`,
  ...popUpAnimation
})

type StarProps = {
  size?: number
  className?: string
  float?: boolean
}

export const Star = ({ className, size, float = true }: StarProps) => {
  const elem = useMemo(() => (
    <StarWrapper className={cx(`star`, className, { float })} aria-hidden={true}>
      <StyledStar size={size} className='star' />
    </StarWrapper>
  ), [])

  return elem
}
