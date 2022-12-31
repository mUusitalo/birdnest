import { updateExistingViolator } from "./updateViolator.js";
import { calculatePartitionedViolators } from './calculatePartitionedViolators.js';
import { mergePilotInfoWithDrone } from "./mergePilotInfoWithDrone.js";

export async function getUpdatedViolators(drones, timestamp, currentViolators) {
  const updatedViolators = [...currentViolators]

  const [existingViolators, newViolators] = calculatePartitionedViolators(drones, currentViolators);
  
  existingViolators.forEach(existingViolator => updateExistingViolator(currentViolators, existingViolator, timestamp));
  const promises = newViolators.map(newViolator => mergePilotInfoWithDrone(newViolator, timestamp));
  const mergedViolators = await Promise.all(promises)
  
  console.log(mergedViolators)
  updatedViolators.push(...mergedViolators)
  
  return updatedViolators
}
