export default function convertDronePositionToMeters({
  positionX,
  positionY,
  ...drone
}) {
  return { positionX: positionX / 1000, positionY: positionY / 1000, ...drone }
}
