
import getGameBySlug from "@/src/services/games/getGameBySlug";
import formatUserScore from "@/utils/scripts/formatUserScore";
import getDefaultUserScore from "@/utils/scripts/getDefaultUserScore";

const getFullGameInfo = async (slug) => {
  const gameData = await getGameBySlug(slug, {
    optionsRaw: {
      include: {
        company: {
          select: { name: true }
        },
        genres: {
          select: {
            Genre: {
              select: { genre: true }
            }
          }
        },
        comments: {
          include: {
            user: {
              select: {
                username: true,
              },
            },
          },
        },
        userScore: {
          select: {
            markOne: true,
            markTwo: true,
            markThree: true,
            markFour: true,
            markFive: true
          }
        },
        requirements: true
      },
    }
  });

  if (!gameData) {
    return null;
  }

  const preparedUserScore = gameData.userScore
  ? formatUserScore(gameData.userScore)
  : getDefaultUserScore()

  const preparedGame = {
    ...gameData,
    company: gameData.company.name,
    genres: gameData.genres.map((genre) => genre.Genre.genre),
    userScore: preparedUserScore,
    requirements: {
      id: gameData.requirements.id,
      gameId: gameData.requirements.gameId,
      minimum: {
        preInfo: gameData.requirements.minimumPreInfo,
        os: gameData.requirements.minimumOS,
        processor: gameData.requirements.minimumProcessor,
        gpu: gameData.requirements.minimumGPU,
        storage: gameData.requirements.minimumStorage,
        additionalNotes: gameData.requirements.minimumAdditionalNotes,
      },
      recommended: {
        preInfo: gameData.requirements.recommendedPreInfo,
        os: gameData.requirements.recommendedOS,
        processor: gameData.requirements.recommendedProcessor,
        gpu: gameData.requirements.recommendedGPU,
        storage: gameData.requirements.recommendedStorage,
        additionalNotes: gameData.requirements.recommendedAdditionalNotes,
      }
    }
  }

  return preparedGame;
}

export default getFullGameInfo;