export function updateExistingViolator(violators, { serialNumber, distance }, timestamp) {
  const violator = violators.find((v) => v.serialNumber === serialNumber);
  violator.lastSeen = timestamp;
  violator.closestDistance = Math.min(violator.closestDistance, distance);
}
