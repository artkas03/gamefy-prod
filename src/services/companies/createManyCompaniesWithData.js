import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createManyCompaniesWithData = async(data) => {
  return prismaClientInstance.company.createMany({
    data,
    skipDuplicates: true,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createManyCompaniesWithData;