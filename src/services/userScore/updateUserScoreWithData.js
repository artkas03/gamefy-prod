import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const updateUserScoreWithData = async(gameSlug, data) => {
  return prismaClientInstance.userScore.update({
    where: {
      gameSlug
    },
    data,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default updateUserScoreWithData;