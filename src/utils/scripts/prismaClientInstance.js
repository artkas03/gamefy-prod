import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClientInstance = new PrismaClient().$extends(withAccelerate());

export default prismaClientInstance;