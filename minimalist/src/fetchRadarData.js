import parser from "./utils/parser.js"
import { calculateEuclideanDistance } from './utils/calculateEuclideanDistance.js'
import { DRONE_API_URL, NDZ_CENTER } from "./utils/config.js"

export async function fetchRadarData() {
  const response = await fetch(DRONE_API_URL)
  const { report } = parser.parse(await response.text())
  return [report.capture.drone, new Date(report.capture['@_snapshotTimestamp'])]
}

export function calculateDroneDistances(dronesList) {
  return dronesList.map((drone) => ({
    ...drone,
    distance: calculateEuclideanDistance(
      drone.positionX,
      drone.positionY,
      NDZ_CENTER.x,
      NDZ_CENTER.y
    ),
  }))
}



