import { PrismaClient, Prisma } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};


const prisma = prismaClientSingleton();

export default prisma;
