import React from 'react';

import './styles.scss';
import { Avatar } from '@nextui-org/react';

export const ProfilePreview = ({
  username
}) => {
  return (
    <div className="profile-preview">
      <Avatar className="profile-preview__avatar" color="default" showFallback src='https://images.unsplash.com/broken' />

      <h2 className="profile-preview__username">{username}</h2>
    </div>
  )
}
