import getManyGameGenres from "@/services/gameGenres/getManyGameGenres";

const getGenres = async() => {
  // TODO: Implement filtering in findMany params.
  const gameGenres = await getManyGameGenres({ fieldsToInclude: [
    'games'
  ]});

  return gameGenres.filter((gameGenre) => gameGenre.games.length > 0);
}

export default getGenres;