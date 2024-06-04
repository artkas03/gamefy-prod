import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createManyGamesWithData = async(data) => {
  return prismaClientInstance.game.createMany({
    data,
    skipDuplicates: true,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createManyGamesWithData;