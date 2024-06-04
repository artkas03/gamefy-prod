'use client';
import React from 'react';

import './styles.scss';
import { GameCatalogHOC } from '@/hocs/GameCatalogHOC';

export const UserCollection = ({
  userCollectionData
}) => {
  return (
    <GameCatalogHOC
      title={'My colletion'}
      isHideSidebar
      isShowHorizontalMenu
      dataForHorizontalMenu={[]}
      userData={userCollectionData}
    />
  )
}
