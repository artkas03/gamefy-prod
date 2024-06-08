import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const updateUserScoreWithData = async(gameSlug, data) => {
  return prismaClientInstance.userScore.update({
    where: {
      gameSlug
    },
    data,
  });
}

export default updateUserScoreWithData;