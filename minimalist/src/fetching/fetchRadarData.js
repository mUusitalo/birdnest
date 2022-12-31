import { DRONE_API_URL } from "../utils/config.js";
import parser from "../utils/parser.js";

export async function fetchRadarData() {
  const response = await fetch(DRONE_API_URL);
  const { report } = parser.parse(await response.text());
  return [report.capture.drone, new Date(report.capture['@_snapshotTimestamp'])];
}
