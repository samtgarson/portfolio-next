import { useDebouncedCallback } from 'use-debounce'
import React, { useState, useEffect, useRef, FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import { getPoints, Bounds, Point, bufferedSetBounds } from './util'
import { Star } from './star'
import { css } from '@emotion/css'
import symbols from './symbols'

const symbolNames = Object.keys(symbols) as Array<keyof typeof symbols>

const FieldWrapper = styled.div({
  pointerEvents: `none`
})

const StarWrapper = styled(Star)({
  position: `absolute`
})

const FieldStar = ({ i, p }: { i: number, p: Point }) => {
  const delay = useMemo(() => 1 + (i/2 * 0.3), [i])
  const symbol = useMemo(() => symbolNames[i % symbolNames.length], [i])

  return (
    <StarWrapper symbol={symbol} className={css({
      animationDelay: `${delay}s`,
      left: p[0], top: p[1],
      '.star': {
        animationDelay: `${delay}s`,
        '--default-rotate': `${(i % 5) * 80}deg`
      }
    })} />
  )
}

export const Field: FunctionComponent<{ className?: string }> = ({ className }) => {
  const [bounds, setBounds] = useState<Bounds>({})
  const [points, setPoints] = useState<Point[]>([])
  const [getAndSetBounds] = useDebouncedCallback(() => bufferedSetBounds(bounds, wrapper, setBounds), 200)
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getAndSetBounds()
    window.addEventListener('resize', getAndSetBounds)

    return () => window.removeEventListener('resize', getAndSetBounds)
  }, [])

  useEffect(() => {
    setPoints(getPoints(bounds))
  }, [bounds])

  return (
    <FieldWrapper ref={wrapper} className={className}>
      { points.map((p, i) => <FieldStar p={p} i={i} key={p.join('-')} />)}
    </FieldWrapper>
  )
}
