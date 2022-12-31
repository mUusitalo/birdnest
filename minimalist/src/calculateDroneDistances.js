import { calculateEuclideanDistance } from './utils/calculateEuclideanDistance.js';
import { NDZ_CENTER } from "./utils/config.js";


export function calculateDroneDistances(dronesList) {
  return dronesList.map((drone) => ({
    ...drone,
    distance: calculateEuclideanDistance(
      drone.positionX,
      drone.positionY,
      NDZ_CENTER.x,
      NDZ_CENTER.y
    ),
  }));
}
