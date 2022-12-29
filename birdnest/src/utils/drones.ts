import { DRONE_API_URL } from './config'
import { Drone } from '../types'

const drones = [
  {
    "serialNumber": "SN-0d1mbVjf9E",
    "positionY": 155476.7752283341,
    "positionX": 410191.47821014636,
    "altitude": 4125.426680572832
  },
  {
    "serialNumber": "SN-Zc0Xu_92MW",
    "positionY": 383342.84594955645,
    "positionX": 25991.168417133118,
    "altitude": 4595.952686255671
  },
  {
    "serialNumber": "SN-eDzrmNxaM9",
    "positionY": 55652.24579677387,
    "positionX": 258489.30668687492,
    "altitude": 4014.901367648032
  }
]

async function fetchDrones(): Promise<Drone[]> {
  // const response = await axios.get(DRONE_API_URL, {
  //   responseType: "json"
  // })
  const response = {
    json: drones
  }

  return response.json.map(({ serialNumber, positionX, positionY }) => ({
    serialNumber: serialNumber,
    x: positionX,
    y: positionY,
  }))
}

export { fetchDrones }