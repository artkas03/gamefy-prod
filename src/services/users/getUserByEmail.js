import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getUserByEmail = async(userEmail, options) => {
  const fieldsToSelect = options?.fieldsToSelect ? options.fieldsToSelect.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];
  const fieldsToInclude = options?.fieldsToInclude ? options.fieldsToInclude.reduce((acc, field) => ({ ...acc, [field]: true }), {}) : [];

  return prismaClientInstance.user.findUnique({
    where: {
      email: userEmail || ''
    },
    ...(options?.fieldsToSelect ? { select: fieldsToSelect } : {}),
    ...(options?.fieldsToInclude ? { include: fieldsToInclude } : {}),
    cacheStrategy: { swr: 60, ttl: 60 },
  });
}

export default getUserByEmail;