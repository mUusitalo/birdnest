import { updateExistingViolator } from "./updateViolator.js";
import { partitionViolatorsToExistingAndNew } from './partitionViolatorsToExistingAndNew.js';
import { mergePilotInfoWithDrone } from "./mergePilotInfoWithDrone.js";
import { removeOldViolators } from "./removeOldViolators.js";
import { calculateViolators } from "./calculateViolators.js";

export async function getRefreshedViolators(drones, timestamp, currentViolators) {
  const updatedViolators = [...currentViolators]

  const violatingDrones = calculateViolators(drones)
  const [existingViolators, newViolators] = partitionViolatorsToExistingAndNew(violatingDrones, currentViolators);
  
  existingViolators.forEach(existingViolator => updateExistingViolator(currentViolators, existingViolator, timestamp));
  const promises = newViolators.map(newViolator => mergePilotInfoWithDrone(newViolator, timestamp));
  const mergedViolators = await Promise.all(promises)
  updatedViolators.push(...mergedViolators)
  const oldViolatorsRemoved = removeOldViolators(updatedViolators, timestamp)
  
  return oldViolatorsRemoved
}
