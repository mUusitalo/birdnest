import { updateExistingViolator } from "./updateViolator.js";
import { partitionViolatorsToExistingAndNew } from './partitionViolatorsToExistingAndNew.js';
import { mergePilotInfoWithDrone } from "./mergePilotInfoWithDrone.js";
import { removeOldViolators } from "./removeOldViolators.js";
import { calculateViolators } from "./calculateViolators.js";

export async function getRefreshedViolators(drones, timestamp, currentViolators) {
  const updatedViolators = [...currentViolators]

  // Calculate which drones are violating the NDZ, then split them to existing violators and new ones
  const violatingDrones = calculateViolators(drones)
  const [existingViolators, newViolators] = partitionViolatorsToExistingAndNew(violatingDrones, currentViolators);

  // Update information of existing violators
  existingViolators.forEach(existingViolator => updateExistingViolator(currentViolators, existingViolator, timestamp));

  // Fetch and save information of new violators  
  const promises = newViolators.map(newViolator => mergePilotInfoWithDrone(newViolator, timestamp));
  const mergedViolators = await Promise.all(promises)
  updatedViolators.push(...mergedViolators)

  // Forget violators who haven't been seen in a while
  const oldViolatorsRemoved = removeOldViolators(updatedViolators, timestamp)
  
  return oldViolatorsRemoved
}
