import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createUserScoreWithData = async(data) => {
  return prismaClientInstance.userScore.create({
    data,
  });
}

export default createUserScoreWithData;