import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function deleteOldPositions(deleteOlderThanMilliSeconds: number) {
  return prisma.position.deleteMany({
    where: {
      timestamp: {
        lt: new Date(Date.now() - deleteOlderThanMilliSeconds),
      },
    },
  })
}

export async function getDronePaths() {
  return await prisma.drone.findMany({
    include: {
      positions: {
        orderBy: { timestamp: 'asc' },
      },
    },
  })
}

export async function createDrones(drones: Prisma.DroneCreateManyInput[]) {
  return await prisma.drone.createMany({
    data: drones,
  })
}

export async function createPositions(
  positions: Prisma.PositionCreateManyInput[]
) {
  return await prisma.position.createMany({
    data: positions,
  })
}
