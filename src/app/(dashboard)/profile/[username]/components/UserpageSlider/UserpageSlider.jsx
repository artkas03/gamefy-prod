import { HomepageSliderBackground } from '@/components/HomepageSlider/components/HomepageSliderBackground';
import image from '@/img/form-swiper2.png';
import React from 'react';

export const UserpageSlider = () => {
  const imageObj = {
    id: 0,
    imageUrl: image.src
  }

  return (
    <HomepageSliderBackground
      images={[imageObj]}
      activeSlideId={0}
      isToHideSlidesContent
      isUseLocaleImages
    />
  );
};
