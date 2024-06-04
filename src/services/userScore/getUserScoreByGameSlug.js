import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getUserScoreByGameSlug = async(gameSlug, options) => {
  const fieldsToSelect = options?.fieldsToSelect ? options.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.userScore.findUnique({
    where: {
      gameSlug
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default getUserScoreByGameSlug;