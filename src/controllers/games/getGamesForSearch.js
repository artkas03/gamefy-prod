import getManyGames from "@/services/games/getManyGames";

const getGamesForSearch = async(query) => {
  return getManyGames({
    fieldsToSelect: [
      'slug',
      'name'
    ],
    optionsRaw: {
      where: {
        name: {
          startsWith: query,
          mode: 'insensitive'
        }
      }
    }
  });
}

export default getGamesForSearch;