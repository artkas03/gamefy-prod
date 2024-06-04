import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createManyGameGenresWithData = async(data) => {
  return prismaClientInstance.genre.createMany({
    data,
    skipDuplicates: true,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createManyGameGenresWithData;