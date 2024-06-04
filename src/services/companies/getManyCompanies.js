import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getManyCompanies = async(options) => {
  const fieldsToInclude = options?.fieldsToInclude ? options?.fieldsToInclude.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.company.findMany({
    ...(options?.fieldsToInclude ? { include: fieldsToInclude } : {}),
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default getManyCompanies;