import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getGameBySlug = async(gameSlug) => {
  return prisma.game.findUnique({
    where: {
      slug: gameSlug
    }
  });
}

export default getGameBySlug;