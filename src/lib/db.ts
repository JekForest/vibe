import { PrismaClient } from '@/generated/prisma'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

// 把prisma存储到global中，因为window对象不受影响，热重载时不会丢失
export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

