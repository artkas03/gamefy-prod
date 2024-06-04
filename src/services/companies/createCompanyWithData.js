import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createCompanyWithData = async(data) => {
  return prismaClientInstance.company.create({
    data,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createCompanyWithData;