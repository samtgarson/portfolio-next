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
  animationTimingFunction: `cubic-bezier(0.860, 0.000, 0.070, 1.000)`
}

export const float = keyframes({
  from: {
    transform: `translateY(-3px) rotate(-20deg)`
  },
  to: {
    transform: `translateY(3px) rotate(20deg)`
  }
})

export const floatAnimation = {
  animationName: float,
  animationDuration: `1.75s`,
  animationFillMode: `both`,
  animationDirection: `alternate`,
  animationIterationCount: `infinite`,
  animationTimingFunction: `ease-in-out`
}

export const popUp = keyframes({
  from: {
    transform: `translateY(120%) rotate(var(--initial-rotate, -360deg))`
  },
  to: {
    transform: `translateY(0) rotate(var(--default-rotate, 0))`
  }
})

export const popUpAnimation = {
  animationName: popUp,
  animationDuration: `200ms`,
  animationFillMode: `both`,
  animationTimingFunction: `cubic-bezier(0.175, 0.885, 0.320, 1.275)`
}
