import * as React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { getBounds, getPoints, Bounds, Point } from './tools'
import { Star } from './star'
import { motion, Variants } from 'framer-motion'

const FieldWrapper = styled(motion.div)({
  position: `fixed`,
  top: 40,
  bottom: 40,
  left: 40,
  right: 40,
  pointerEvents: `none`
})

const variants: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
}

export const Field = () => {
  const [bounds, setBounds] = useState<Bounds>({})
  const [points, setPoints] = useState<Point[]>([])
  const [getAndSetBounds] = useDebouncedCallback(() => setBounds(getBounds(wrapper)), 200)
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('resize', getAndSetBounds)
    getAndSetBounds()

    return () => window.removeEventListener('resize', getAndSetBounds)
  }, [])

  useEffect(() => {
    setPoints(getPoints(bounds))
  }, [bounds])

  return (
    <FieldWrapper
      ref={wrapper}
      animate='animate'
      initial='initial'
      variants={variants}
    >
      { points.map((p, i) => <Star p={p} i={i} key={p.join('-')} />)}
    </FieldWrapper>
  )
}
