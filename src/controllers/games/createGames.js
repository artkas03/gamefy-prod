import createGameWithData from '@/services/games/createGameWithData';

const slugRegExp = /[^a-zA-Z0-9]/g;

const createGames = async (gamesArray) => {
  const preparedGames = gamesArray.map(({ 
    name,
    companyId,
    genres,
    description,
    platforms,
    releaseDate,
    voiceLanguages,
    subtitlesLanguages,
    requirements
  }) => {
    const slug = name.toLocaleLowerCase().replace(slugRegExp, '-');

    return {
      slug,
      name,
      companyId,
      platforms,
      description,
      releaseDate,
      voiceLanguages,
      subtitlesLanguages,
      requirements: {
        create: { ...requirements }
      },
      genres: {
        create: genres.map((genreId) => ({ genreId })),
      },
    };
  });

  const createGamesPromiseArray = preparedGames.map((game) => createGameWithData(game))

  return Promise.all(createGamesPromiseArray);
};

export default createGames;

