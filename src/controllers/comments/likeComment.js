import likeCommentWithId from "@/services/comments/likeCommentWithId";

const likeComment = async (commentId) => {
  return likeCommentWithId(commentId);
}

export default likeComment;