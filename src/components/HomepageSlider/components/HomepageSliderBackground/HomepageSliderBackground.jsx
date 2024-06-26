'use client';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { HomepageSliderSlideContent } from '../HomepageSliderSlideContent';
import image from '@/img/fallback-image.png';

// import checkIfProduction from '@/utils/scripts/checkIfProduction';

import 'swiper/css';
import './styles.scss';
import getS3ImageUrl from '@/utils/scripts/getS3ImageUrl';
import getCollectionGameIn from '@/utils/scripts/getCollectionGameIn';

export const HomepageSliderBackground = ({
  images,
  activeSlideId,
  onSwiperSlide = () => {},
  isToHideSlidesContent = false,
  isUseLocaleImages = false,
  userData = null,
  ...restProps
}) => {
  const [swiper, setSwiper] = useState();

  const swiperConfig = {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  useEffect(() => {
    swiper?.slideToLoop(activeSlideId, 400);
  }, [activeSlideId, swiper]);

  return (
    <Swiper
      {...swiperConfig}
      onSwiper={setSwiper}
      onActiveIndexChange={(swiper) => onSwiperSlide(swiper.realIndex)}
      className="swiper-background"
      {...restProps}
    >
      {images.map(({ id, slug, ...slideRestProps }) => {
        const gameInCollection = userData && getCollectionGameIn(id, userData.collection);

        return (
          <SwiperSlide
            key={id}
          >
            <HomepageSliderSlideContent
              image={isUseLocaleImages ? slideRestProps.imageUrl : getS3ImageUrl(slug)} 
              gameData={{ slug, ...slideRestProps }}
              isHideContent={isToHideSlidesContent}
              gameInCollection={gameInCollection}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}