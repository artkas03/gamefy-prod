import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const countGamesStartsWithQuery = async(query) => {
  const gamesNumber = prismaClientInstance.game.count({
    where: {
      name: {
        startsWith: query
      }
    },
  });

  return gamesNumber;
}

export default countGamesStartsWithQuery;