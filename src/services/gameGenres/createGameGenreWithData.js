import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createGameGenreWithData = async(data) => {
  return prismaClientInstance.genre.create({
    data,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createGameGenreWithData;