import { PILOT_API_BASE_URL } from "./utils/config.js"

function getPilotApiUrl(serialNo) {
  return PILOT_API_BASE_URL + serialNo
}

export async function fetchPilotInfo(serialNumber) {
  const response = await fetch(getPilotApiUrl(serialNumber))
  if (response.status === 200) {
    return response.json()
  } else {
    return {}
  }
}

export async function mergePilotInfoWithDrone(violatingDroneWithDistance, timestamp) {
  const {distance, serialNumber} = violatingDroneWithDistance
  const pilot = await fetchPilotInfo(serialNumber)
  const violatorInfo = {...violatingDroneWithDistance, closestDistance: distance, ...pilot, lastSeen: new Date(timestamp)}
  return violatorInfo
}