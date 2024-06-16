import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getUserCollection = async(userId, options) => {
  const fieldsToSelect = options?.fieldsToSelect ? options?.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.userCollection.findUnique({
    where: {
      userId
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.optionsRaw ? options.optionsRaw : {}),
  });
}

export default getUserCollection;