import { calculateDroneDistances } from "./calculateDroneDistances.js";
import { NDZ_RADIUS } from './utils/config.js';


export function calculateViolators(drones) {
  const dronesWithDistances = calculateDroneDistances(drones);

  const violatingDrones = dronesWithDistances.filter(
    ({ distance }) => distance < NDZ_RADIUS
  );
  return violatingDrones;
}
