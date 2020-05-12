import { useRef, useEffect } from 'react'
import { Themes, Theme } from '~/styles/theme'
import { useIntersection } from './use-intersection'

export const useThemedSection = <T extends HTMLElement = HTMLDivElement>(theme: Themes) => {
  const { setTheme } = Theme.useContainer()
  const wrapperRef = useRef<T>(null)
  const inView = useIntersection(wrapperRef, { threshold: .5 })

  useEffect(() => {
    if (inView?.isIntersecting) setTheme(theme)
  }, [inView])

  return wrapperRef
}

