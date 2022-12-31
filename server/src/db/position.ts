import prisma from './client'

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
