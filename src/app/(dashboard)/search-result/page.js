import React from 'react';

import './styles.scss';
import { GameCatalogHOC } from '@/hocs/GameCatalogHOC';
import axiosInstance from '@/utils/scripts/api';

const fetchData = async (query) => {
  try {
    const data = await axiosInstance.get('')
  } catch(err) {
    console.error(err);
  }
}

export default async function SerachResult({ _, searchParams }) {
  const queryToFetch = searchParams.query;

  return (
    <div className="games-search-result grid">
      <GameCatalogHOC
        title={`Results for "${queryToFetch}"`}
        isHideSidebar
        isCatalogFullOnDesktop
        fetchWithQuery={queryToFetch}
      />
    </div>
  )
}