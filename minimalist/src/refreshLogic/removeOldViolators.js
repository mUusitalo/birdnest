import { VIOLATOR_PERSISTENCE_MILLISECONDS } from './utils/config.js'

export function removeOldViolators(violators, latestDate) {
  return violators.filter(
    (violator) =>
      latestDate - violator.lastSeen < VIOLATOR_PERSISTENCE_MILLISECONDS
  )
}
