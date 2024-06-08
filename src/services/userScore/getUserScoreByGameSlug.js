import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getUserScoreByGameSlug = async(gameSlug, options) => {
  const fieldsToSelect = options?.fieldsToSelect ? options.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.userScore.findUnique({
    where: {
      gameSlug
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
  });
}

export default getUserScoreByGameSlug;