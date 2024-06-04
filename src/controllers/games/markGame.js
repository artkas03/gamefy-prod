import createUserScoreWithData from "@/services/userScore/createUserScoreWithData";
import getUserScoreByGameSlug from "@/services/userScore/getUserScoreByGameSlug";
import updateUserScoreWithData from "@/services/userScore/updateUserScoreWithData";
import getUserByEmail from "@/services/users/getUserByEmail";
import markKeys from "@/utils/scripts/markKeys";

const markGame = async (markGameData) => {
  const {
    userEmail,
    mark,
    gameSlug
  } = markGameData;

  const userScoreToUpdatePromise = getUserScoreByGameSlug(gameSlug);
  const getActionUserIdPromise = getUserByEmail(userEmail, {
    fieldsToSelect: [
      'id'
    ]
  });

  const [userScoreToUpdate, actionUserId] = await Promise.all([
    userScoreToUpdatePromise,
    getActionUserIdPromise
  ]);

  const response = {
    data: {}
  }

  if (!userScoreToUpdate) {
    response.data = await createUserScoreWithData({
      gameSlug,
      [markKeys[mark]]: [actionUserId.id]
    });
  } else {
    const dataForUpdate = {};

    Object.values(markKeys).forEach((markField) => {
      if (markField !== markKeys[mark]) {
        const filteredArray = userScoreToUpdate[markField].filter((idItem) => idItem !== actionUserId.id);

        if (filteredArray.length !== userScoreToUpdate[markField].length) {
          dataForUpdate[markField] = filteredArray;
        }
      } else {
        if (userScoreToUpdate[markField].includes(actionUserId.id)) {
          return;
        } else {
          dataForUpdate[markField] = [...userScoreToUpdate[markField], actionUserId.id];
        }
      }
    });

    if (Object.keys(dataForUpdate).length > 0) {
      response.data = await updateUserScoreWithData(gameSlug, {
        ...dataForUpdate
      });
    }
  }

  return response.data;
}

export default markGame;