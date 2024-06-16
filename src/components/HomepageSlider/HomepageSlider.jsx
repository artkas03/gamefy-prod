'use client';
import React, { useEffect, useState } from 'react';

import './styles.scss';
import axiosInstance from '@/utils/scripts/api';
import { Skeleton } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { HomepageSliderBackground } from './components/HomepageSliderBackground';

const HomepageSliderControllerDynamic = dynamic(
  () => import('./components/HomepageSliderController').then((mod) => mod.HomepageSliderController), 
  {
    loading: () => <Skeleton />
  }
);

const gamesIdsInSlider = [48, 10, 4, 35, 19];

export const HomepageSlider = ({
  isRenderSliderController = true,
  isRenderSliderBackground = true,
  userData = null,
}) => {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const [gamesGata, setGamesData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/games/getGamesById?ids=${gamesIdsInSlider.join(',')}`)
      .then((response) => {
        setGamesData(response.data.games)
      })
      .catch(console.error)
      .finally(() => setIsDataLoading(false))
  }, []);

  return (
    <div className="homepage-swiper">
      {isRenderSliderBackground &&(
        <HomepageSliderBackground
          images={gamesGata}
          allowTouchMove={false}
          activeSlideId={activeSlideId}
          onSwiperSlide={setActiveSlideId}
          userData={userData}
        />
      )}

      {(isRenderSliderController && !false) && (
        <HomepageSliderControllerDynamic
          images={gamesGata}
          activeSlideId={activeSlideId}
          onSwiperSlide={setActiveSlideId}
        />
      )}
    </div>
  )
}
