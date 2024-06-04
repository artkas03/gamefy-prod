import getManyCompanies from '@/services/companies/getManyCompanies';
import getManyGameGenres from '@/services/gameGenres/getManyGameGenres';
import getManyGames from '@/services/games/getManyGames';
import getUserCollection from '@/services/userCollections/getUserCollection';
import getUserByEmail from '@/services/users/getUserByEmail';
import collectionListsKeys from '@/utils/scripts/collectionListsKeys';
import formatUserScore from '@/utils/scripts/formatUserScore';
import getDefaultUserScore from '@/utils/scripts/getDefaultUserScore';
import { GAMES_IN_PAGE } from 'appconfig';

const getGamesForCatalogPage = async (params) => {
  const {
    pagination,
    gamesToTake,
    query,
    activeGenre,
    userEmail
  } = params;

  const companiesPromise = getManyCompanies();
  const genresPromise = getManyGameGenres({
    fieldsToInclude: ['games'],
  });
  const gamesPromise = getManyGames({
    optionsRaw: {
      orderBy: {
        releaseDate: 'desc',
      },
      include: {
        genres: true,
        userScore: {
          select: {
            markOne: true,
            markTwo: true,
            markThree: true,
            markFour: true,
            markFive: true
          }
        },
      },
      where: {
        AND: [
          {
            name: {
              startsWith: query,
              mode: 'insensitive',
            },
          },
          {
            ...(activeGenre && {
              genres: {
                some: {
                  Genre: {
                    genre: activeGenre,
                  },
                },
              },
            }),
          },
        ],
      },
      take: GAMES_IN_PAGE,
      skip: (pagination - 1) * GAMES_IN_PAGE,
    },
  });
  const userPromise = getUserByEmail(userEmail, { fieldsToSelect: ['id'] });

  const [companies, genres, games, user] = await Promise.all([
    companiesPromise,
    genresPromise,
    gamesPromise,
    userPromise
  ]);

  const userCollection = user && await getUserCollection(user?.id);

  const gamesGamesPageData = games.map((game) => {
    const { companyId, userScore } = game;
    game.userCollectionList = userCollection ? Object.keys(collectionListsKeys).find((key) => userCollection[key].includes(game.id)) : null;
    game.userScore = userScore ? formatUserScore(userScore) : getDefaultUserScore();
    game.companyId = companies.find((company) => companyId === company.id).name;
    game.genres = game.genres.map(
      (gameGenre) =>
        genres.find((genre) => gameGenre.genreId === genre.id).genre
    );

    return game;
  });

  return gamesGamesPageData;
};

export default getGamesForCatalogPage;
