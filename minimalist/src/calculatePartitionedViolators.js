import { calculateDroneDistances } from "./calculateDroneDistances.js";
import { NDZ_RADIUS } from './utils/config.js';
import { partition } from './utils/partition.js';

export function calculatePartitionedViolators(drones, existingViolators) {
  const dronesWithDistances = calculateDroneDistances(drones);

  const violatingDrones = dronesWithDistances.filter(
    ({ distance }) => distance < NDZ_RADIUS
  );

  const violatingSerials = existingViolators.map((v) => v.serialNumber);

  return partition(
    violatingDrones,
    (violator) => violatingSerials.includes(violator.serialNumber)
  );
}
