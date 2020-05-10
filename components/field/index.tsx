import { useDebouncedCallback } from 'use-debounce'
import React, { useState, useEffect, useRef, FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { getPoints, Bounds, Point, bufferedSetBounds } from './util'
import { Star } from './star'
import { motion } from 'framer-motion'

const FieldWrapper = styled(motion.div)({
  pointerEvents: `none`
})

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
      { points.map((p, i) => <Star p={p} i={i} key={p.join('-')} />)}
    </FieldWrapper>
  )
}
