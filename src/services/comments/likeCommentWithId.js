import prismaClientInstance from "@/utils/scripts/prismaClientInstance";
import getCommentById from "./getCommentById";

const likeCommentWithId = async (commentId, userId) => {
  const usersIdLikedCurrent = await getCommentById(commentId, {
    fieldsToSelect: [
      'usersIdLiked'
    ]
  });

  const ifUserLikedPost = usersIdLikedCurrent.usersIdLiked.includes(userId);

  let updatedUsersIdLike = [...usersIdLikedCurrent.usersIdLiked];

  if (ifUserLikedPost) {
    updatedUsersIdLike = updatedUsersIdLike.filter((id) => id !== userId);
  } else {
    updatedUsersIdLike.push(userId);
  }

  return prismaClientInstance.comment.update({
    where: {
      id: commentId
    },
    data: {
      usersIdLiked: updatedUsersIdLike,
      likesNumber: ifUserLikedPost ? { decrement: 1 } : { increment: 1 }
    }
  });;
}

export default likeCommentWithId;