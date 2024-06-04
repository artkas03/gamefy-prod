import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const createCommentWithData = async(data) => {
  return prismaClientInstance.comment.create({
    data,
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default createCommentWithData;