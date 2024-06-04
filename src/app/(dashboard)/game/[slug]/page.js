import React from 'react'
import GamePageComponent from './components/GamePageComponent/GamePageComponent';

import './styles.scss';
import axiosInstance from '@/utils/scripts/api';

const useGetGameData = async (slug) => {
  try {
    const {
      data: { gameData },
    } = await axiosInstance.get(`/games/${slug}`);

    if (!gameData) {
      return null;
    }

    return gameData;
  } catch (err) {
    console.error(err);
    return null;
  }
};

async function Gamepage({ params }) {
  const data = await useGetGameData(params.slug);
  
  return (
    <GamePageComponent gameData={data} />
  )
}

export default Gamepage;