'use client';
import getS3ImageUrl from '@/utils/scripts/getS3ImageUrl';
import fallbackImage from '@/img/form-swiper6.jpg'
import React from 'react'
import { HomepageSliderBackground } from '@/components/HomepageSlider/components/HomepageSliderBackground';
import checkIfProduction from '@/utils/scripts/checkIfProduction';

export const GamePreview = ({
  gameSlug,
  gameData
}) => {
  const imageUrl = checkIfProduction() ? getS3ImageUrl(gameSlug) : fallbackImage.src;
  const images = [{
    id: 0,
    imageUrl: imageUrl,
    ...gameData
  }]

  return (
    <HomepageSliderBackground
      images={images}
      activeSlideId={0}
    />
  )
}
