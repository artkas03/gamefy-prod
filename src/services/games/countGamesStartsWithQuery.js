import prismaClientInstance from "@/utils/scripts/prismaClientInstance";

const countGamesStartsWithQuery = async(query) => {
  const gamesNumber = prismaClientInstance.game.count({
    where: {
      name: {
        startsWith: query
      }
    },
    cacheStrategy: { swr: 60, ttl: 60 },
  });

  return gamesNumber;
}

export default countGamesStartsWithQuery;