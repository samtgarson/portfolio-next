import { CanvasSpace, Create, Polygon, Circle, Num, Shaping, Group, Pt, Rectangle, Bound } from 'pts'

type Point = {
  pt: Pt
  rotate: number
  distance: number
  size: number
  i: number
}

const mouseRadius = 120
const fps = 5000
const float = 3

const getPoly = (
  space: CanvasSpace,
  { pt, size }: Point,
  mouseArea: Group
) => {
  let poly: Group

  if ( Circle.withinBound( mouseArea, pt ) ) {
    const dist = (mouseRadius - pt.$subtract(space.pointer).magnitude() ) / mouseRadius
    const p = pt.$subtract( space.pointer ).scale( 1+dist ).add( space.pointer )
    poly = Polygon.fromCenter(p, size + 15*dist, 6)
  } else {
    poly = Polygon.fromCenter(pt, size, 6)
  }

  return poly
}

const setup = (space: CanvasSpace) => {
  const quadrantSize = 150
  const numX = window.innerWidth / quadrantSize
  const numY = window.innerHeight / quadrantSize
  const count = numX * numY
  const bound = Bound.fromGroup(Rectangle.fromCenter(space.innerBound.center, space.innerBound.width * 0.95, space.innerBound.height * 0.31))

  const pts = Create
    .distributeRandom( bound, count )
    .map((pt, i) => {
      const distance = Num.randomRange(0, 1)
      return {
        i,
        pt,
        rotate: 36 * i,
        distance,
        size: Num.mapToRange(distance, 0, 1, 3, 5)
      }
    })

  return { bound, pts }
}

const getFloatModifiers = (t: number, i: number) => {
  const it = (t + (i * 0.1)) % 1
  const cycle = Num.cycle(it, Shaping.quadraticInOut)
  const floatMod = Num.mapToRange(cycle, 0, 1, -float, float)
  return floatMod
}

const getReadyModifiers = (i: number, time?: number) => {
  const readyOffset = i * 50 + 500
  const readyDuration = 350
  const readyHeight = 10
  const opacity = Shaping.elasticOut(Num.mapToRange(
    Num.clamp(time || 0, readyOffset, readyOffset + readyDuration),
    readyOffset, readyOffset + readyDuration,
    0, 1
  ))
  const popMod = readyHeight - (opacity * readyHeight)
  return { opacity, popMod }
}

const getScrollModifiers = (offset: number) => {
  const scrollDistance = 1000
  const totalDistance = 100
  const clampedOffset = Num.clamp(offset, 0, scrollDistance)
  const progress = Shaping.quadraticOut(Num.mapToRange(clampedOffset, 0, scrollDistance, 0, 1))
  return {
    scrollMod: progress * totalDistance,
    opacity: 1 - progress
  }
}

export const init = (el: HTMLDivElement, initialColor: string) => {
  const space = new CanvasSpace(el).setup({ resize: true, retina: true, bgcolor: `transparent` })
  const form = space.getForm()

  let pts: Point[] = []
  let bound: Bound

  let color = initialColor
  let scrollOffset = 0

  const start = () => {
    const res = setup(space)
    pts = res.pts
    bound = res.bound
    scrollHandler()
  }

  let updating = false
  const updateScroll = () => {
    scrollOffset = window.scrollY - el.offsetTop - bound.y
    updating = false
  }

  const scrollHandler = () => {
    if (updating) return
    window.requestAnimationFrame(updateScroll)
  }

  window.addEventListener('scroll', scrollHandler, { passive: true })

  space.add({
    start,
    resize: start,

    animate: time => {
      const mouseArea = Circle.fromCenter( space.pointer, mouseRadius )
      const t = (time || 1) % fps / fps
      const { scrollMod, opacity: scrollOpacity } = getScrollModifiers(scrollOffset)

      for (let i=0, len=pts.length; i<len; i++) {
        const scrollDistanceMod = Num.mapToRange(pts[i].distance, 0, 1, 0.5, 4)
        const { popMod, opacity: readyOpacity } = getReadyModifiers(i, time)
        const floatMod = getFloatModifiers(t, i)

        const poly = getPoly(space, pts[i], mouseArea)
          .add({ x: 0, y: popMod + floatMod + (scrollMod * scrollDistanceMod) })
          .rotate2D(pts[i].rotate)

        form.fillOnly(color).alpha(readyOpacity * scrollOpacity).polygon(poly)
      }
    }
  })

  space.bindMouse().bindTouch().play()

  return {
    dispose: () => {
      window.removeEventListener('scroll', scrollHandler)
      space.dispose()
    },
    updateColor: (newColor: string) => { color = newColor }
  }
}

