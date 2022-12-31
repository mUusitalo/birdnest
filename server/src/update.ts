import { createDronesIfNotExists, createPositions, deleteOldPositions } from "./db/queries"

const MILLISECONDS_IN_MINUTE = 60_000

async function update(xml: string) {
  const parsed = parsexml(xml)
  const normalized = normalizeDistances(parsed)
  const drones = normalized.drones
  const queries = [createDronesIfNotExists(drones), deleteOldPositions(10 * MILLISECONDS_IN_MINUTE), createPositions()]
  

}