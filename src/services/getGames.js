import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getGames = async() => {
  return prisma.game.findMany();
}

export default getGames;