import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Theme } from '../../styles/theme'
import { init } from './init'

export const Field: FunctionComponent<{ className?: string, debug?: boolean, id: string }> = ({ className, debug = false, id }) => {
  const canvas = useRef(null)
  const colorUpdater = useRef<(newColor: string) => void>()
  const { colors } = Theme.useContainer()
  const [styles, setStyles] = useState({})

  useEffect(() => {
    if ("ontouchstart" in window || "ontouch" in window) setStyles({ pointerEvents: `none` })
  }, [])


  useEffect(() => {
    if (!canvas.current) return

    const { dispose, updateColor } = init(`#${id}`, colors.fg, debug)
    colorUpdater.current = updateColor

    return dispose
  }, [canvas])

  useEffect(() => {
    if (!colorUpdater.current) return
    colorUpdater.current(colors.fg)
  }, [colors])

  return <div style={styles} ref={canvas} id={id} className={className}></div>
}
