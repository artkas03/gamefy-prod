import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const updateGameToCollection = async(updateOptions, options) => {
  const {
    userId,
    oldCollection,
    oldCollectionValue,
    newCollection,
    newCollectionValue
  } = updateOptions;

  const fieldsToSelect = options?.fieldsToSelect ? options?.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.userCollection.update({
    where: {
      userId
    },
    data: {
      ...(newCollection ? { [newCollection]: newCollectionValue } : {}),
      ...(oldCollection ? { [oldCollection]: oldCollectionValue } : {})
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.optionsRaw ? options.optionsRaw : {}),
  });
}

export default updateGameToCollection;