import { DRONE_API_URL } from "../utils/config.js";
import convertDronePositionToMeters from "../utils/convertDronePositionToMeters.js";
import parser from "../utils/parser.js";

export async function fetchRadarData() {
  const response = await fetch(DRONE_API_URL);
  const { report } = parser.parse(await response.text());
  const droneList = report.capture.drone?.map(convertDronePositionToMeters) ?? []
  return [droneList, new Date(report.capture['@_snapshotTimestamp'])];
}
