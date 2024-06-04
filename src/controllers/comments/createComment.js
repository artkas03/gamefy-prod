import createCommentWithData from "@/services/comments/createCommentWithData";
import getGameBySlug from "@/services/games/getGameBySlug";
import getUserByEmail from "@/services/users/getUserByEmail";

const createComment = async (commentData) => {
  const [gameId, userId] = await Promise.all([
    getGameBySlug(commentData?.gameSlug, {
      fieldsToSelect: [
        'id'
      ]
    }),
    getUserByEmail(commentData?.userEmail, {
      fieldsToSelect: [
        'id'
      ]
    })
  ]);

  return createCommentWithData({
    gameId: gameId.id,
    userId: userId.id,
    text: commentData.text
  });
}

export default createComment;