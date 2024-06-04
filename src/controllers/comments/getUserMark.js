import getUserScoreByGameSlug from "@/services/userScore/getUserScoreByGameSlug";
import getUserByEmail from "@/services/users/getUserByEmail";
import markKeys from "@/utils/scripts/markKeys";

const getUserMark = async(dataForSearch) => {
  const {
    email,
    gameSlug
  } = dataForSearch;

  const [userId, gameUserScore] = await Promise.all([
    getUserByEmail(email, { fieldsToSelect: ['id'] }),
    getUserScoreByGameSlug(gameSlug, {
      fieldsToSelect: [
        'markOne',
        'markTwo',
        'markThree',
        'markFour',
        'markFive',
      ]
    })
  ]);

  const response = {};

  for (const userScoreField in gameUserScore) {
    if (gameUserScore[userScoreField].includes(userId.id)) {
      response.userMark = Object.entries(markKeys).find((entry) => entry[1] === userScoreField)[0];
    }
  }
  return response?.userMark || null;
}

export default getUserMark;