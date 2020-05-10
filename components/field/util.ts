import { RefObject } from "react"

export type Point = [number, number]
export type Bounds = { w?: number, h?: number }

const shuffle = <T>(a: T[]): T[] => a
  .sort(() => 0.5 - Math.random())

const rand = (min: number, max: number) => Math.random() * (max - min) + min

const X_TILE_SIZE = 200
const Y_TILE_SIZE = 160

const getBounds = (ref: RefObject<HTMLDivElement>): Bounds => {
  if (!ref.current) return {}

  const { clientWidth: w, clientHeight: h } = ref.current
  return { w, h }
}

export const getPoints = ({ w, h }: Bounds) => {
  const points: Point[] = []
  if (!w || !h ) return points

  const xTilesNum = Math.floor(w / X_TILE_SIZE)
  const xTilesSize = w / xTilesNum
  const yTilesNum = Math.floor(h / Y_TILE_SIZE)
  const yTilesSize = h / yTilesNum

  for (let j=0; j < yTilesNum; j++) {
    const yMin = yTilesSize * j
    const yMax = yTilesSize * (j+1)

    for (let i=0; i < xTilesNum; i++) {
      const xMin = xTilesSize * i
      const xMax = xTilesSize * (i+1)

      const point: Point = [rand(xMin, xMax), rand(yMin, yMax)]
      points.push(point)
    }
  }

  return shuffle(points)
}


const BUFFER = 100
export const bufferedSetBounds = (bounds: Bounds, wrapper: RefObject<HTMLDivElement>, setBounds: (b: Bounds) => void) => {
  const newBounds = getBounds(wrapper)

  if (newBounds.w && newBounds.h && bounds.w && bounds.h) {
    const diff = (newBounds.w + newBounds.h) - (bounds.w + bounds.h)
    if (Math.abs(diff) < BUFFER) return
  }

  setBounds(newBounds)
}
