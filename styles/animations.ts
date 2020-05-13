import { keyframes } from "@emotion/react"

export const stretch = keyframes({
  from: {
    fontVariationSettings: `'wdth' 100, 'wght' 0`
  },
  to: {
    fontVariationSettings: `'wdth' -80, 'wght' 0`
  }
})

export const stretchAnimation = {
  animationName: stretch,
  animationDuration: `1.5s`,
  animationFillMode: `both`,
  animationDirection: `alternate`,
  animationIterationCount: `infinite`,
  animationTimingFunction: `cubic-bezier(0.6, -0.3, 0.4, 1)`
}

export const float = keyframes({
  from: {
    transform: `translateY(-3px)`
  },
  to: {
    transform: `translateY(3px)`
  }
})

export const floatAnimation = {
  animationName: float,
  animationDuration: `1.5s`,
  animationFillMode: `both`,
  animationDirection: `alternate`,
  animationIterationCount: `infinite`,
  animationTimingFunction: `ease-in-out`
}
