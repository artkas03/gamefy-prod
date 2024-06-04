import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createUserCollection = async(createOptions, options) => {
  const {
    userId,
    gameId,
    newCollection
  } = createOptions;

  const fieldsToSelect = options?.fieldsToSelect ? options?.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.userCollection.create({
    data: {
      userId,
      [newCollection]: [gameId]
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.optionsRaw ? options.optionsRaw : {}),
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createUserCollection;