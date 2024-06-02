'use client';
import { GameCatalog } from '@/components/GameCatalog';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';

import './styles.scss';
import { SidebarDesktop } from '@/components/Sidebar/SidebarDesktop';
import { Select, SelectItem, Pagination } from '@nextui-org/react';
import { SidebarBurgerMenuButton } from '@/components/Sidebar/SidebarBurgerMenuButton';
import useBreakpoint from 'use-breakpoint';
// import axiosInstance from '@/utils/scripts/api';
// import { SidebarContext } from '@/context/SidebarContext';
import { HorizonralMenu } from '@/components/HorizonralMenu/HorizonralMenu';
// import { useSession } from 'next-auth/react';
import collectionListsKeys from '@/utils/scripts/collectionListsKeys';
import { BREAKPOINTS, GAMES_IN_PAGE } from 'appconfig';

// const sortOptions = [
//   "Name",
//   "Total mark",
//   "Genre",
//   "Company"
// ];

// const filterOptions = [
//   "Option 1",
//   "Option 2",
//   "Option 3",
//   "Option 4"
// ];

const getPreparedCollectionData = (userData, isShowHorizontalMenu) => {
  if (!isShowHorizontalMenu) return {};

  const {
    id,
    userId,
    ...collectionsData
  } = userData;

  return Object.entries(collectionListsKeys)
  .reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: { name: value, quantity: collectionsData[key].length }
    }
  }, {});
}

export const GameCatalogHOC = ({
  title,
  gamesToShow,
  userData,
  dataForHorizontalMenu = [],
  isShowHorizontalMenu = false,
  isHideSidebar = false,
  isCatalogFullOnDesktop = false,
  fetchWithQuery = '',
}) => {
  // const { data: session } = useSession();
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile');
  const [page, setPage] = useState(1);
  const [pageGames, setPageGames] = useState(gamesToShow || []);
  const [isLoading, setIsLoading] = useState(false);
  const [horizonralMenuActiveList, setHorizonralMenuActiveList] = useState(userData ? Object.keys(collectionListsKeys)[0] : '');
  // const { 
  //   activeGenre,
  //   setActiveGenre,
  //   gamesLength,
  //   setGamesLength
  // } = useContext(SidebarContext);

  const activeGenre = '';
  const setActiveGenre = () => {};
  const gamesLength = 0;
  const setGamesLength = useCallback(() => {}, []);

  const preparedCollectionData = getPreparedCollectionData(userData, isShowHorizontalMenu);

  const pagesNumber = useMemo(() => Math.ceil(gamesLength / GAMES_IN_PAGE), [gamesLength]);

  // useEffect(() => {
  //   if (!horizonralMenuActiveList) return;

  //   const startIndex = (page - 1) * GAMES_IN_PAGE;
  //   const getIdsArray = userData[horizonralMenuActiveList].slice(startIndex, startIndex + GAMES_IN_PAGE);
  //   setGamesLength(userData[horizonralMenuActiveList].length);

  //   axiosInstance.get(`/games/getGamesById?ids=${getIdsArray.join(',')}`)
  //     .then((respose) => setPageGames(respose.data.games));
  // }, [horizonralMenuActiveList, page, setGamesLength, userData]);

  // useEffect(() => {
  //   if (horizonralMenuActiveList) return;

  //   setIsLoading(true);

  //   axiosInstance.get(`/getGamesLength?query=${fetchWithQuery}`)
  //     .then((response) => setGamesLength(response.data.gamesQuantity))
  //     .finally(() => setIsLoading(false));
  // }, [fetchWithQuery, setGamesLength, horizonralMenuActiveList])

  // useEffect(() => {
  //   if (horizonralMenuActiveList) return;

  //   const fetchUrlSearchParams = new URLSearchParams();

  //   if (page) {
  //     fetchUrlSearchParams.append('page', page);
  //   }

  //   if (fetchWithQuery) {
  //     fetchUrlSearchParams.append('query', fetchWithQuery);
  //   }

  //   if (activeGenre) {
  //     fetchUrlSearchParams.append('activeGenre', activeGenre);
    // }

    // if (session?.user) {
    //   fetchUrlSearchParams.append('userEmail', session.user.email);
    // }

  //   const urlWithParams = `/games/getGamesForCatalogPage?${fetchUrlSearchParams.toString()}`;
  //   axiosInstance.get(urlWithParams)
  //     .then((response) => {
  //       setPageGames(response.data.games)
  //     })
  //     .catch((err) => console.error(err));
  // }, [page, fetchWithQuery, activeGenre, horizonralMenuActiveList]);

  const isToShowNoResultMessage = gamesToShow && !gamesToShow.length || !pageGames.length;

  const handleChangeActiveList = (newActiveList) => {
    if (activeGenre) {
      setActiveGenre('');
    }

    setHorizonralMenuActiveList(newActiveList);
  }

  return (
    <div className="game-catalog-hoc grid">
      <div className="game-catalog-hoc__header">
        <h3 className="game-catalog-hoc__title">
          {title}
        </h3>

        <div className="game-catalog-hoc__buttons">
          {/* <Select
            placeholder={'Filter by'}
            startContent={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2333_14886)">
                  <path d="M13.9995 24C13.7831 24 13.5726 23.9298 13.3995 23.8L9.39949 20.8C9.2753 20.7069 9.17449 20.5861 9.10507 20.4472C9.03564 20.3084 8.99949 20.1552 8.99949 20V14.38L1.98349 6.487C1.48521 5.92488 1.15987 5.23082 1.04657 4.48823C0.933273 3.74565 1.03684 2.98615 1.34482 2.30101C1.65279 1.61588 2.15208 1.03426 2.78267 0.626066C3.41326 0.217873 4.14832 0.000474419 4.89949 0L19.0995 0C19.8506 0.000881051 20.5855 0.218639 21.2158 0.627107C21.8461 1.03557 22.3451 1.61737 22.6528 2.30259C22.9604 2.9878 23.0637 3.74727 22.9501 4.48975C22.8365 5.23222 22.5109 5.9261 22.0125 6.488L14.9995 14.38V23C14.9995 23.2652 14.8941 23.5196 14.7066 23.7071C14.5191 23.8946 14.2647 24 13.9995 24ZM10.9995 19.5L12.9995 21V14C12.9997 13.7552 13.0897 13.5189 13.2525 13.336L20.5205 5.159C20.7628 4.88508 20.921 4.54704 20.9759 4.18545C21.0309 3.82387 20.9803 3.4541 20.8303 3.12056C20.6802 2.78701 20.4371 2.50386 20.1301 2.30509C19.8231 2.10632 19.4652 2.00038 19.0995 2H4.89949C4.53394 2.00055 4.17631 2.10655 3.8695 2.30527C3.56268 2.50399 3.3197 2.78699 3.1697 3.12035C3.0197 3.45371 2.96905 3.82326 3.02382 4.18468C3.07859 4.5461 3.23646 4.88405 3.47849 5.158L10.7475 13.336C10.9099 13.519 10.9996 13.7553 10.9995 14V19.5Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2333_14886">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            }
            className="game-catalog-hoc__select"
          >
            {filterOptions.map((option) => (
              <SelectItem key={option}>
                {option}
              </SelectItem>
            ))}
          </Select>

          <Select
            placeholder={'Sort by'}
            startContent={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2333_11703)">
                  <path d="M7 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 7C0 8.06087 0.421427 9.07828 1.17157 9.82843C1.92172 10.5786 2.93913 11 4 11H7C8.06087 11 9.07828 10.5786 9.82843 9.82843C10.5786 9.07828 11 8.06087 11 7V4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0V0ZM9 7C9 7.53043 8.78929 8.03914 8.41421 8.41421C8.03914 8.78929 7.53043 9 7 9H4C3.46957 9 2.96086 8.78929 2.58579 8.41421C2.21071 8.03914 2 7.53043 2 7V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7Z" fill="white"/>
                  <path d="M7 13H4C2.93913 13 1.92172 13.4214 1.17157 14.1716C0.421427 14.9217 0 15.9391 0 17L0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H7C8.06087 24 9.07828 23.5786 9.82843 22.8284C10.5786 22.0783 11 21.0609 11 20V17C11 15.9391 10.5786 14.9217 9.82843 14.1716C9.07828 13.4214 8.06087 13 7 13ZM9 20C9 20.5304 8.78929 21.0392 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0392 2 20.5304 2 20V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H7C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17V20Z" fill="white"/>
                  <path d="M22.2932 19.049L20.0002 21.339V2.63297L22.2932 4.92297C22.3861 5.01581 22.4964 5.08945 22.6178 5.13967C22.7391 5.18989 22.8692 5.21572 23.0005 5.21567C23.1319 5.21563 23.2619 5.18971 23.3833 5.1394C23.5046 5.08909 23.6148 5.01538 23.7077 4.92247C23.8005 4.82956 23.8742 4.71927 23.9244 4.5979C23.9746 4.47654 24.0004 4.34647 24.0004 4.21512C24.0003 4.08377 23.9744 3.95371 23.9241 3.83238C23.8738 3.71105 23.8001 3.60081 23.7072 3.50797L21.1202 0.924968C20.5577 0.363166 19.7952 0.0476074 19.0002 0.0476074C18.2052 0.0476074 17.4427 0.363166 16.8802 0.924968L14.2932 3.50797C14.2003 3.60081 14.1266 3.71105 14.0763 3.83238C14.026 3.95371 14 4.08377 14 4.21512C14 4.34647 14.0258 4.47654 14.076 4.5979C14.1262 4.71927 14.1999 4.82956 14.2927 4.92247C14.3855 5.01538 14.4958 5.08909 14.6171 5.1394C14.7384 5.18971 14.8685 5.21563 14.9998 5.21567C15.1312 5.21572 15.2613 5.18989 15.3826 5.13967C15.504 5.08945 15.6143 5.01581 15.7072 4.92297L18.0002 2.63297V21.339L15.7072 19.049C15.6143 18.9561 15.504 18.8825 15.3826 18.8323C15.2613 18.7821 15.1312 18.7562 14.9998 18.7563C14.8685 18.7563 14.7384 18.7822 14.6171 18.8325C14.4958 18.8829 14.3855 18.9566 14.2927 19.0495C14.1999 19.1424 14.1262 19.2527 14.076 19.374C14.0258 19.4954 14 19.6255 14 19.7568C14 19.8882 14.026 20.0182 14.0763 20.1396C14.1266 20.2609 14.2003 20.3711 14.2932 20.464L16.8802 23.047C17.4427 23.6088 18.2052 23.9243 19.0002 23.9243C19.7952 23.9243 20.5577 23.6088 21.1202 23.047L23.7072 20.464C23.8001 20.3711 23.8738 20.2609 23.9241 20.1396C23.9744 20.0182 24.0003 19.8882 24.0004 19.7568C24.0004 19.6255 23.9746 19.4954 23.9244 19.374C23.8742 19.2527 23.8005 19.1424 23.7077 19.0495C23.6148 18.9566 23.5046 18.8829 23.3833 18.8325C23.2619 18.7822 23.1319 18.7563 23.0005 18.7563C22.8692 18.7562 22.7391 18.7821 22.6178 18.8323C22.4964 18.8825 22.3861 18.9561 22.2932 19.049Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2333_11703">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            }
            className="game-catalog-hoc__select"
          >
            {sortOptions.map((option) => (
              <SelectItem key={option}>
                {option}
              </SelectItem>
            ))}
          </Select> */}

          <SidebarBurgerMenuButton shouldDissapearFrom={'desktop'} />
        </div>
      </div>

      {(isShowHorizontalMenu && isHideSidebar) && (
        <HorizonralMenu
          data={preparedCollectionData}
          activeList={horizonralMenuActiveList}
          handleChangeActiveList={handleChangeActiveList}
        />
      )}

      {(!isShowHorizontalMenu && !isHideSidebar)&& (
        <div className="game-catalog-hoc__sidebar">
          <SidebarDesktop
            title={'Categories'}
          />
        </div>
      )}

      <div className={cn("game-catalog-hoc__grid", {
        "game-catalog-hoc__grid--with-sidebar": !isHideSidebar,
        "game-catalog-hoc__grid--without-sidebar": isHideSidebar,
      })}>
        {isToShowNoResultMessage ? (
          <p className="game-catalog-hoc__grid-no-result-msg">No games have been found.</p>
        ) : (
          <GameCatalog
            games={gamesToShow || pageGames}
            isFullWidthOnDesktop={isCatalogFullOnDesktop}
          />
        )}
      </div>

      <div className="game-catalog-hoc__pagination-wrapper">
        {!isLoading && (
          <Pagination
            className="game-catalog-hoc__pagination"
            total={pagesNumber || 1}
            initialPage={1}
            page={page}
            onChange={(page) => setPage(page)}
            boundaries={breakpoint === 'mobile' ? 1 : 2}
            siblings={breakpoint === 'mobile' ? 0 : 1}
            showControls
            showShadow
          />
        )}
      </div>
    </div>
  )
}
