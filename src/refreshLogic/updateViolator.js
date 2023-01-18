export function updateExistingViolator(violators, { serialNumber, distance }, timestamp) {
  const violator = violators.find((v) => v.serialNumber === serialNumber);
  const { lastSeen } = violator
  violator.lastSeen = timestamp > lastSeen ? timestamp : lastSeen
  violator.closestDistance = Math.min(violator.closestDistance, distance);
}
