import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createUserScoreWithData = async(data) => {
  return prismaClientInstance.userScore.create({
    data,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createUserScoreWithData;