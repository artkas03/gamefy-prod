import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getManyGames = async(options) => {
  const fieldsToInclude = options?.fieldsToInclude ? options?.fieldsToInclude.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];
  const fieldsToSelect = options?.fieldsToSelect ? options?.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.game.findMany({
    ...(options?.fieldsToInclude ? { include: fieldsToInclude } : {}),
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.optionsRaw ? options.optionsRaw : {}),
  });
}

export default getManyGames;