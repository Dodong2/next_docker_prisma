import { PrismaClient } from "@/generated/prisma"

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  // This allows extending the global object in TypeScript
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma
// If not in production, cache the instance on the global object
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma
}


