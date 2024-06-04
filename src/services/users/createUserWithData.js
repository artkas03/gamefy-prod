import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createUserWithData = async(data) => {
  return prismaClientInstance.user.create({
    data : {
      ...data,
      collection: {
        create: {
          'inProgress': [],
          'favorite': [],
          'finished': [],
          'planning': [],
          'dropped': [],
          'postponed': [],
        },
      }
    },
    include: {
      collection: true,
    },
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createUserWithData;