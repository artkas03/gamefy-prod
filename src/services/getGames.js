import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const getGames = async() => {
  return prismaClientInstance.game.findMany();
}

export default getGames;