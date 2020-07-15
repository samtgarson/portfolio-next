import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Theme } from '../../styles/theme'
import { init } from './init'

let counter = 0
export const Field: FunctionComponent<{ className?: string, debug?: boolean }> = ({ className, debug = false }) => {
  const canvas = useRef(null)
  const colorUpdater = useRef<(newColor: string) => void>()
  const { colors } = Theme.useContainer()
  const id = `star-field-${counter}`


  useEffect(() => {
    if (!canvas.current) return

    counter++
    const { dispose, updateColor } = init(`#${id}`, colors.fg, debug)
    colorUpdater.current = updateColor

    return dispose
  }, [canvas])

  useEffect(() => {
    if (!colorUpdater.current) return
    colorUpdater.current(colors.fg)
  }, [colors])

  return <div ref={canvas} id={id} className={className}></div>
}
