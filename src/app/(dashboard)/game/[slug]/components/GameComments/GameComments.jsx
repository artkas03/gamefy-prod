import React from 'react';

import './styles.scss';
import { GameComment } from '../GameComment/GameComment';

export const GameComments = ({
  comments = []
}) => {
  return (
    <div className="comments">
      {comments.length === 0 && (
        <p>There are no comments for this game yet.</p>
      )}

      {comments.length > 0 && comments.map(({ id, likesNumber, usersIdLiked, text, user }) => (
        <div key={id} className="comments__block">
          <GameComment
            commentId={id}
            nickname={user.username}
            commentText={text}
            // TODO: Replace hardcoded likes
            mark={4}
            likeQuantity={usersIdLiked.length}
          />
        </div>
      ))}
    </div>
  );
};
