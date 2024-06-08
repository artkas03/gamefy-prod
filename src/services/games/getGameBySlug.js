import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getGameBySlug = async(gameSlug, options) => {
  const fieldsToSelect = options?.fieldsToSelect ? options?.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.game.findUnique({
    where: {
      slug: gameSlug
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.optionsRaw ? options.optionsRaw : {}),
  });
}

export default getGameBySlug;