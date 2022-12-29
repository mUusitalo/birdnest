import { useEffect, useRef, useState } from "react"
import Two from "two.js"
import { Drone } from "../types"

type RadarProps = {
  drones: Drone[]
}

const Radar: React.FunctionComponent<RadarProps> = ({ drones }) => {
  const [two] = useState(new Two({
    width: 500,
    height: 500,
  }))
  const twoRef = useRef<HTMLDivElement>(null)

  const updateTwo = (drones: Drone[]) => {
    two.clear()
    const rectangle = two.makeRectangle(two.width / 2, two.width / 2, two.width, two.height)
    rectangle.fill = '0xFFFFFF'
    drones.forEach(({ x, y }) => {
      console.log(`Drawing drone at: ${x / 1000}, ${y / 1000}`)
      const circle = two.makeCircle(x / 1000, y / 1000, 10)
      circle.fill = "green"
    })
    if (twoRef.current) {
      two.appendTo(twoRef.current)
    }
    two.update()
  }

  useEffect(() => updateTwo(drones), [drones])

  return (
      <div ref={twoRef} />
  )
}

export default Radar