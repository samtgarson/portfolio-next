import { CanvasSpace, Create, Polygon, Circle, Num, Shaping, Group, Pt } from 'pts'

type Point = {
  pt: Pt
  rotate: number
  size: number
}

const mouseRadius = 120
const fps = 5000
const float = 3

const getPoly = (
  space: CanvasSpace,
  { pt, rotate, size }: Point,
  i: number,
  t: number,
  range: Group
) => {
  const it = (t + (i * 0.1)) % 1
  const cycle = Num.cycle(it, Shaping.quadraticInOut)
  const y = Num.mapToRange(cycle, 0, 1, -float, float)
  const mod = { x: 0, y }

  let poly: Group

  if ( Circle.withinBound( range, pt ) ) {
    const dist = (mouseRadius - pt.$subtract(space.pointer).magnitude() ) / mouseRadius
    const p = pt.$subtract( space.pointer ).scale( 1+dist ).add( space.pointer )
    poly = Polygon.fromCenter(p, size + 15*dist, 6)
  } else {
    poly = Polygon.fromCenter(pt, size, 6)
  }

  return poly.add(mod).rotate2D(rotate)
}

const setup = (space: CanvasSpace) => {
  const quadrantSize = 150
  const numX = window.innerWidth / quadrantSize
  const numY = window.innerHeight / quadrantSize
  const count = numX * numY

  return Create
    .distributeRandom( space.innerBound, count )
    .map((pt, i) => ({
      pt,
      rotate: 36 * i,
      size: Num.randomRange(3, 5)
    }))
}


export const init = (el: HTMLDivElement, initialColor: string) => {
  const space = new CanvasSpace(el).setup({ resize: true, retina: true, bgcolor: `transparent` })
  const form = space.getForm()

  let pts: Point[] = []

  let color = initialColor

  space.add({
    start: () => { pts = setup(space) },
    resize: () => { pts = setup(space) },

    animate: time => {
      const range = Circle.fromCenter( space.pointer, mouseRadius )
      const t = (time || 1) % fps / fps

      for (let i=0, len=pts.length; i<len; i++) {
        const poly = getPoly(space, pts[i], i, t, range)
        form.fillOnly(color).polygon(poly)
      }
    }
  })

  space.bindMouse().bindTouch().play()

  return {
    dispose: () => { space.dispose() },
    updateColor: (newColor: string) => { color = newColor }
  }
}

