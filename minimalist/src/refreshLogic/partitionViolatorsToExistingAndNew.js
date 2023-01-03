import { partition } from '../utils/partition.js'

export function partitionViolatorsToExistingAndNew(violatingDrones, existingViolators) {
  const violatingSerials = existingViolators.map((v) => v.serialNumber);

  return partition(
    violatingDrones,
    (violator) => violatingSerials.includes(violator.serialNumber)
  );
}

