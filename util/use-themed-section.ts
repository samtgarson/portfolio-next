import { useRef, useEffect } from 'react'
import { Themes, Theme } from '~/styles/theme'
import { useIntersection } from './use-intersection'

export const useThemedSection = <T extends HTMLElement = HTMLDivElement>(before: Themes, after: Themes) => {
  const { setTheme } = Theme.useContainer()
  const wrapperRef = useRef<T>(null)
  const inView = useIntersection(wrapperRef, { rootMargin: "0px 0px -400px 0px" })

  useEffect(() => {
    if (!inView || inView?.boundingClientRect.y <= 0) return
    if (inView?.isIntersecting) setTheme(after)
    else setTheme(before)
  }, [inView])

  return wrapperRef
}

