'use client';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import './styles.scss';
import { Button, Divider } from '@nextui-org/react';
import { SidebarCard } from '../SidebarCard';
import { SidebarContext } from '@/context/SidebarContext';
import axiosInstance from '@/utils/scripts/api';

const getGenres = async () => axiosInstance.get('/gameGenres/getGenres');

export const SidebarBurger = () => {
  const [genres, setGenres] = useState([]);
  const { 
    activeGenre, 
    setActiveGenre, 
    setGamesLength
  } = useContext(SidebarContext);
  const burgerRef = useRef(null);

  const totalGamesNumber = useMemo(() => {
    const allGamesIds = genres?.reduce((acc, genre) => [...acc, ...genre.games.map(({ gameId}) => gameId)], []);

    const gamesSet = new Set(allGamesIds);
    return gamesSet.size;
  }, [genres])

  const handleCloseBurger = () => {
    document.body.classList.remove('body--overflow-hidden');
    burgerRef.current.classList.remove('burger--opened');
  }

  const getHandlerOnClick = (genre, gamesInGenreQuantity) => (e) => {
    e.preventDefault();
    setActiveGenre(genre);
    setGamesLength(gamesInGenreQuantity);
    handleCloseBurger();
  }

  useEffect(() => {
    getGenres()
    .then((response) => {
      const newGenres = [...response.data.genres];

      setGenres(newGenres);
    })
    .catch((err) => {
      console.error(err)
    })
  }, []);

  return (
    <div id="burger" ref={burgerRef} className="burger grid">
      <div className="burger__header">
        <h3 className="burger__title">Categories</h3>

        <Button className="burger__close" onClick={handleCloseBurger} isIconOnly>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <g clipPath="url(#clip0_2469_13497)">
              <path
                d="M15.8045 0.195435C15.6795 0.0704544 15.51 0.000244141 15.3332 0.000244141C15.1564 0.000244141 14.9869 0.0704544 14.8619 0.195435L7.99986 7.05744L1.13786 0.195435C1.01284 0.0704544 0.8433 0.000244141 0.666524 0.000244141C0.489748 0.000244141 0.320209 0.0704544 0.195191 0.195435C0.0702103 0.320454 0 0.489992 0 0.666768C0 0.843545 0.0702103 1.01308 0.195191 1.1381L7.05719 8.0001L0.195191 14.8621C0.0702103 14.9871 0 15.1567 0 15.3334C0 15.5102 0.0702103 15.6798 0.195191 15.8048C0.320209 15.9298 0.489748 16 0.666524 16C0.8433 16 1.01284 15.9298 1.13786 15.8048L7.99986 8.94277L14.8619 15.8048C14.9869 15.9298 15.1564 16 15.3332 16C15.51 16 15.6795 15.9298 15.8045 15.8048C15.9295 15.6798 15.9997 15.5102 15.9997 15.3334C15.9997 15.1567 15.9295 14.9871 15.8045 14.8621L8.94252 8.0001L15.8045 1.1381C15.9295 1.01308 15.9997 0.843545 15.9997 0.666768C15.9997 0.489992 15.9295 0.320454 15.8045 0.195435Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2469_13497">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>

      <Divider className="burger__divider" orientation="horizontal" />

      <div className="burger__genres">
        <SidebarCard
          isActive={activeGenre === 'All'}
          handleOnClick={getHandlerOnClick('All', totalGamesNumber)}
          name={'All'}
          // TODO: Cange quantity to games.length
          quantity={totalGamesNumber}
        />

        {genres.map(({ id, genre, games }) => (
          <SidebarCard
            key={id}
            isActive={genre === activeGenre}
            handleOnClick={getHandlerOnClick(genre, games.length)}
            name={genre}
            quantity={games.length}
          />
        ))}
      </div>
    </div>
  );
};
