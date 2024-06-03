'use client';
import React, { useEffect, useState } from 'react';

import './styles.scss';
// import axiosInstance from '@/utils/scripts/api';
import { Skeleton } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { HomepageSliderBackground } from './components/HomepageSliderBackground';

const HomepageSliderBackgroundDynamic = dynamic(
  () => import('./components/HomepageSliderBackground').then((mod) => mod.HomepageSliderBackground), 
  {
    loading: () => <Skeleton className="w-[100%] h-[700px]" />
  }
);

const HomepageSliderControllerDynamic = dynamic(
  () => import('./components/HomepageSliderController').then((mod) => mod.HomepageSliderController), 
  {
    loading: () => <Skeleton />
  }
);

const gamesIdsInSlider = [48, 10, 4, 35];

export const HomepageSlider = ({
  isRenderSliderController = true,
  isRenderSliderBackground = true
}) => {
  // const [activeSlideId, setActiveSlideId] = useState(0);
  // const [gamesGata, setGamesData] = useState([]);
  // const [isDataLoading, setIsDataLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     axiosInstance.get(`/games/getGamesById?ids=${gamesIdsInSlider.join(',')}`)
  //       .then((response) => setGamesData(response.data.games))
  //       .catch(console.error)
  //       .finally(() => setIsDataLoading(false))
  //   }, 1000)
  // }, []); 

  return (
    <div className="homepage-swiper">
      {isRenderSliderBackground &&(
        <HomepageSliderBackgroundDynamic
          images={[]}
          allowTouchMove={false}
          activeSlideId={0}
          onSwiperSlide={() => {}}
        />
      )}

      {(isRenderSliderController && !false) && (
        <HomepageSliderControllerDynamic
          images={[]}
          activeSlideId={0}
          onSwiperSlide={() => {}}
        />
      )}
    </div>
  )
}
