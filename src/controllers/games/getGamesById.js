import getManyGames from "@/services/games/getManyGames";

const getGamesById = async(idsArray) => {
  const games = await getManyGames({
    optionsRaw: {
      where: {
        id: {
          in: idsArray
        }
      },
      include: {
        userScore: true,
        genres: {
          select: {
            Genre: {
              select: { genre: true }
            }
          }
        },
        company: {
          select: { name: true }
        },
      }
    },
  });

  const preparedGames = games.map((game) => {
    const {
      id,
      slug,
      description,
      genres,
      userScore,
      name,
      company
    } = game;

    const preparedGame = {
      id,
      slug,
      description,
      genres: genres.map((genre) => genre.Genre.genre),
      company: company.name,
      userScore: userScore || {
        markingRaw: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        total: 0
      },
      name
    };

    return preparedGame;
  })

  return preparedGames;
}

export default getGamesById;