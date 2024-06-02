'use client';
import React, { useContext, useState, useEffect, useMemo } from 'react';

import './styles.scss';
import { Divider } from '@nextui-org/react';
import { SidebarCard } from '../SidebarCard';
// import { SidebarContext } from '@/context/SidebarContext';
// import axiosInstance from '@/utils/scripts/api';

// const getGenres = async () => axiosInstance.get('/gameGenres/getGenres');

export const SidebarDesktop = ({
  title,
}) => {
  const [genres, setGenres] = useState([]);
  // const { activeGenre, setActiveGenre, setGamesLength } = useContext(SidebarContext);
  const activeGenre = '';
  const setActiveGenre = () => {};
  const setGamesLength = () => {};

  const totalGamesNumber = useMemo(() => {
    const allGamesIds = genres?.reduce((acc, genre) => [...acc, ...genre.games.map(({ gameId}) => gameId)], []);

    const gamesSet = new Set(allGamesIds);
    return gamesSet.size;
  }, [genres])

  const getHandlerOnClick = (genre, gamesInGenreQuantity) => (e) => {
    e.preventDefault();
    setActiveGenre(genre);
    setGamesLength(gamesInGenreQuantity);
  };

  // useEffect(() => {
  //   getGenres()
  //     .then((response) => {
  //       const newGenres = [...response.data.genres];

  //       setGenres(newGenres);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div className="desktop-sidebar">
      <h3 className="desktop-sidebar__title">{title}</h3>

      <Divider orientation="horizontal" />

      <div className="desktop-sidebar__cardlist">
        <SidebarCard
          isActive={activeGenre === 'All'}
          handleOnClick={getHandlerOnClick('All', totalGamesNumber)}
          name={'All'}
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
