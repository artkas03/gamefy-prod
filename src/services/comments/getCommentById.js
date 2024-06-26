import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getCommentById = async(commentId, options) => {
  const fieldsToSelect = options?.fieldsToSelect ? options.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.comment.findUnique({
    where: {
      id: commentId
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
  });
}

export default getCommentById;