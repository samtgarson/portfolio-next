import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Theme } from '../../styles/theme'
import { init } from './init'

export const Field: FunctionComponent<{ className?: string }> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const colorUpdater = useRef<(newColor: string) => void>()
  const { colors } = Theme.useContainer()

  useEffect(() => {
    if (!ref.current) return

    const { dispose, updateColor } = init(ref.current, colors.fg)
    colorUpdater.current = updateColor
    return dispose
  }, [ref])

  useEffect(() => {
    if (!colorUpdater.current) return
    colorUpdater.current(colors.fg)
  }, [colors])

  return <div ref={ref} className={className}></div>
}
