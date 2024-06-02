'use client';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '@/img/form-swiper1.png';
import image2 from '@/img/form-swiper2.png';
import image3 from '@/img/form-swiper3.png';
import image4 from '@/img/form-swiper4.png';
import image5 from '@/img/form-swiper5.png';
import image6 from '@/img/form-swiper6.png';

import 'swiper/css';
import './styles.scss';
import Image from 'next/image';
import { FormSliderButton } from './components/FormSliderButton/FormSliderButton';

const imagesForSlider = [
  {
    id: 1,
    image: image1,
    slideTitle: 'Welcome to Gamefy!',
    slideText: 'Your ultimate gaming platform awaits. Explore a world of endless entertainment and excitement.',
  },
  {
    id: 2,
    image: image2,
    slideTitle: 'Welcome to Gamefy!',
    slideText: 'Your ultimate gaming platform awaits. Explore a world of endless entertainment and excitement.'
  },
  {
    id: 3,
    image: image3,
    slideTitle: 'Welcome to Gamefy!',
    slideText: 'Your ultimate gaming platform awaits. Explore a world of endless entertainment and excitement.'
  },
  {
    id: 4,
    image: image4,
    slideTitle: 'Welcome to Gamefy!',
    slideText: 'Your ultimate gaming platform awaits. Explore a world of endless entertainment and excitement.'
  },
  {
    id: 5,
    image: image5,
    slideTitle: 'Welcome to Gamefy!',
    slideText: 'Your ultimate gaming platform awaits. Explore a world of endless entertainment and excitement.'
  },
  {
    id: 6,
    image: image6,
    slideTitle: 'Welcome to Gamefy!',
    slideText: 'Your ultimate gaming platform awaits. Explore a world of endless entertainment and excitement.'
  },
]

export const FormSlider = () => {
  const swiperConfig = {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  }

  return (
    <Swiper
      {...swiperConfig}
      modules={[Autoplay]}
      className="form-swiper"
    >
      {imagesForSlider.map(({ id, image, slideTitle, slideText }) => (
        <SwiperSlide 
          key={id} 
          className="form-swiper__slide"
        >
          <Image
            alt="Mountains"
            src={image}
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
            className="form-swiper__slide-image"
          />

          <div className="form-swiper__slide-logo">
            <svg width="71" height="24" viewBox="0 0 71 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.744 10.544C8.60533 10.32 8.408 10.1493 8.152 10.032C7.896 9.904 7.58667 9.84 7.224 9.84C6.54133 9.84 6.01333 10.064 5.64 10.512C5.26667 10.9493 5.08 11.552 5.08 12.32C5.08 13.2053 5.288 13.8667 5.704 14.304C6.12 14.7413 6.76 14.96 7.624 14.96C8.44533 14.96 9.10667 14.6293 9.608 13.968H6.776V11.456H12.552V15.008C12.0613 15.8507 11.384 16.576 10.52 17.184C9.656 17.7813 8.56267 18.08 7.24 18.08C6.06667 18.08 5.04267 17.84 4.168 17.36C3.304 16.8693 2.63733 16.1867 2.168 15.312C1.70933 14.4373 1.48 13.44 1.48 12.32C1.48 11.2 1.70933 10.2027 2.168 9.328C2.63733 8.45333 3.304 7.776 4.168 7.296C5.032 6.80533 6.04533 6.56 7.208 6.56C8.69067 6.56 9.896 6.91733 10.824 7.632C11.7627 8.34667 12.3173 9.31733 12.488 10.544H8.744ZM21.0953 16.288H17.3193L16.7593 18H13.0312L17.1753 6.672H21.2713L25.3993 18H21.6553L21.0953 16.288ZM20.2313 13.616L19.2073 10.464L18.1833 13.616H20.2313ZM39.8223 6.672V18H36.2863V12.352L34.5423 18H31.5023L29.7583 12.352V18H26.2063V6.672H30.5583L33.0543 13.472L35.4863 6.672H39.8223ZM44.977 9.504V10.896H48.497V13.568H44.977V15.168H48.977V18H41.425V6.672H48.977V9.504H44.977ZM58.3156 6.672V9.488H53.8676V11.056H57.0676V13.728H53.8676V18H50.3156V6.672H58.3156ZM70.3988 6.672L66.3348 14.56V18H62.7828V14.56L58.7188 6.672H62.7828L64.5908 10.688L66.3988 6.672H70.3988Z" fill="#3259E8"/>
              <path d="M7.744 10.544C7.60533 10.32 7.408 10.1493 7.152 10.032C6.896 9.904 6.58667 9.84 6.224 9.84C5.54133 9.84 5.01333 10.064 4.64 10.512C4.26667 10.9493 4.08 11.552 4.08 12.32C4.08 13.2053 4.288 13.8667 4.704 14.304C5.12 14.7413 5.76 14.96 6.624 14.96C7.44533 14.96 8.10667 14.6293 8.608 13.968H5.776V11.456H11.552V15.008C11.0613 15.8507 10.384 16.576 9.52 17.184C8.656 17.7813 7.56267 18.08 6.24 18.08C5.06667 18.08 4.04267 17.84 3.168 17.36C2.304 16.8693 1.63733 16.1867 1.168 15.312C0.709333 14.4373 0.48 13.44 0.48 12.32C0.48 11.2 0.709333 10.2027 1.168 9.328C1.63733 8.45333 2.304 7.776 3.168 7.296C4.032 6.80533 5.04533 6.56 6.208 6.56C7.69067 6.56 8.896 6.91733 9.824 7.632C10.7627 8.34667 11.3173 9.31733 11.488 10.544H7.744ZM20.0953 16.288H16.3193L15.7593 18H12.0312L16.1753 6.672H20.2713L24.3993 18H20.6553L20.0953 16.288ZM19.2313 13.616L18.2073 10.464L17.1833 13.616H19.2313ZM38.8223 6.672V18H35.2863V12.352L33.5423 18H30.5023L28.7583 12.352V18H25.2063V6.672H29.5583L32.0543 13.472L34.4863 6.672H38.8223ZM43.977 9.504V10.896H47.497V13.568H43.977V15.168H47.977V18H40.425V6.672H47.977V9.504H43.977ZM57.3156 6.672V9.488H52.8676V11.056H56.0676V13.728H52.8676V18H49.3156V6.672H57.3156ZM69.3988 6.672L65.3348 14.56V18H61.7828V14.56L57.7188 6.672H61.7828L63.5908 10.688L65.3988 6.672H69.3988Z" fill="white"/>
            </svg>
          </div>
        
          <div className="form-swiper__slide-content">
            <div className="form-swiper__slide-text">
              <h3 className="form-swiper__slide-title">
                {slideTitle}
              </h3>

              <p className="form-swiper__slide-subtext">{slideText}</p>
            </div>

            <div className="form-swiper__buttons">
              <FormSliderButton />

              <FormSliderButton isPrevButton={false} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
