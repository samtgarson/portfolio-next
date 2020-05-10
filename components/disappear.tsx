import React, { FunctionComponent, useRef, useEffect, useState } from "react"
import { useTransform, useViewportScroll, motion } from "framer-motion"

type DisappearProps = {
  friction?: number
  height?: number
}
const DEFAULT_HEIGHT = 200

export const Disappear: FunctionComponent<DisappearProps> = ({ children, friction = 0.5, height = DEFAULT_HEIGHT }) => {
  const { scrollY } = useViewportScroll()
  const [yPos, setYPos] = useState(0)
  const el = useRef<HTMLDivElement>(null)

  const yRange = [0, height * friction]
  const opacityRange = [1, 0]

  const y = useTransform(scrollY, [yPos, yPos + height], yRange)
  const opacity = useTransform(scrollY, [yPos, yPos + height], opacityRange)

  useEffect(() => {
    if (!el.current) return
    setYPos(el.current.offsetTop)
  }, [])

  return <motion.div style={{ y, opacity }} ref={el}>{ children }</motion.div>
}
