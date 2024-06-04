import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createGameWithData = async(data) => {
  return prismaClientInstance.game.create({
    data,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createGameWithData;