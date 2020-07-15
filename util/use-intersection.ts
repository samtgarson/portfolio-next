// https://github.com/streamich/react-use/blob/master/src/useIntersection.ts
import { RefObject, useEffect, useState, useRef } from 'react'

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0])
      }

      const observer = new IntersectionObserver(handler, options)
      observer.observe(ref.current)

      return () => {
        setIntersectionObserverEntry(null)
        observer.disconnect()
      }
    }
    return () => {}
  }, [ref.current, options.threshold, options.root, options.rootMargin])

  return intersectionObserverEntry
}

export const useVisibleElement = (options: IntersectionObserverInit) => {
  const ref = useRef(null)
  const inView = useIntersection(ref, options)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(false)
    if (!intersectionEnabled) return setVisible(true)
    if (!inView) return

    setVisible(inView.isIntersecting || inView.boundingClientRect.y <= 0)
  }, [inView])

  return { visible, ref }
}

export const intersectionEnabled = typeof window !== 'undefined' && 'IntersectionObserver' in window
