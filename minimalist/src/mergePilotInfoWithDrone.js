import { fetchPilotInfo } from "./fetching/getPilotApiUrl.js";

export async function mergePilotInfoWithDrone(violatingDroneWithDistance, timestamp) {
  const { distance, serialNumber } = violatingDroneWithDistance;
  const pilot = await fetchPilotInfo(serialNumber);
  const violatorInfo = { ...violatingDroneWithDistance, closestDistance: distance, ...pilot, lastSeen: new Date(timestamp) };
  return violatorInfo;
}
