import React, { FunctionComponent, useRef, useEffect, useState } from "react"

type DisappearProps = {
  friction?: number
  height?: number
}
const DEFAULT_HEIGHT = 200

export const Disappear: FunctionComponent<DisappearProps> = ({ children, friction = 0.5, height = DEFAULT_HEIGHT }) => {
  const { scrollY } = { scrollY: 0 }
  const [yPos, setYPos] = useState(0)
  const el = useRef<HTMLDivElement>(null)

  const yRange = [0, height * friction]
  const opacityRange = [1, 0]

  const y = 0
  const opacity = 1

  useEffect(() => {
    if (!el.current) return
    setYPos(el.current.offsetTop)
  }, [])

  return <div ref={el}>{ children }</div>
}
