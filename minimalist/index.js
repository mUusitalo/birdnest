import { fetchRadarData } from './src/fetchRadarData.js'
import { getUpdatedViolators } from './src/updateViolators.js'
import { UPDATE_INTERVAL_MILLISECONDS } from './src/utils/config.js'

var currentViolators = []

async function update() {
  const [drones, timestamp] = await fetchRadarData()
  currentViolators = await getUpdatedViolators(drones, timestamp, currentViolators)
  console.log(currentViolators)
}

setInterval(update, UPDATE_INTERVAL_MILLISECONDS)

