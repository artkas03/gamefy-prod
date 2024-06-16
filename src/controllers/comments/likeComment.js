import likeCommentWithId from "@/services/comments/likeCommentWithId";
import getUserByEmail from "@/src/services/users/getUserByEmail";

const likeComment = async (commentId, userEmail) => {
  const { id } = await getUserByEmail(userEmail, {
    fieldsToSelect: [ 'id' ]
  });

  return likeCommentWithId(commentId, id);
}

export default likeComment;