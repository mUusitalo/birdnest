const DRONE_API_URL = 'https://assignments.reaktor.com/birdnest/drones'
const PILOT_API_BASE_URL = 'https://assignments.reaktor.com/birdnest/pilots/'
const NDZ_RADIUS = 100000
const NDZ_CENTER = { x: 250000, y: 250000 }

/**
 * Updating every 500 milliseconds to decrease the probability of missing an update from the server that updates around every 2 seconds.
 * Because the supplied endpoint is a simple HTTP endpoint that responds immediately (thus doesn't support long polling),
 * this is the best we can do without spamming the server with a bunch of requests.
 */
const UPDATE_INTERVAL_MILLISECONDS = 500
const VIOLATOR_PERSISTENCE_MILLISECONDS = 60_000 * 10
const PORT = 3000

export {
  DRONE_API_URL,
  PILOT_API_BASE_URL,
  NDZ_RADIUS,
  NDZ_CENTER,
  UPDATE_INTERVAL_MILLISECONDS,
  VIOLATOR_PERSISTENCE_MILLISECONDS,
  PORT,
}