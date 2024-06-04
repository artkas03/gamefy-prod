import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getUser = async(requestOptions, options) => {
  const {
    fieldToSearchBy,
    fieldValue
  } = requestOptions;

  const fieldsToInclude = options?.fieldsToInclude ? options?.fieldsToInclude.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];
  const fieldsToSelect = options?.fieldsToSelect ? options?.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.user.findUnique({
    where: {
      [fieldToSearchBy]: fieldValue
    },
    ...(options?.fieldsToInclude ? { select: fieldsToInclude } : {}),
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.optionsRaw ? options.optionsRaw : {}),
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default getUser;