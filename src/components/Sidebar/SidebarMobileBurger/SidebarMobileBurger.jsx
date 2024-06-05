'use client';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import './styles.scss';
import { Avatar, Button, Divider } from '@nextui-org/react';
import { SidebarCard } from '../SidebarCard';
import { SidebarContext } from '@/context/SidebarContext';
import axiosInstance from '@/utils/scripts/api';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const getGenres = async () => axiosInstance.get('/gameGenres/getGenres');

export const SidebarMobileBurger = () => {
  const [genres, setGenres] = useState([]);
  const { activeGenre, setActiveGenre, setGamesLength } =
    useContext(SidebarContext);
  const burgerRef = useRef(null);
  const { data: session } = useSession();

  const totalGamesNumber = useMemo(() => {
    const allGamesIds = genres?.reduce(
      (acc, genre) => [...acc, ...genre.games.map(({ gameId }) => gameId)],
      []
    );

    const gamesSet = new Set(allGamesIds);
    return gamesSet.size;
  }, [genres]);

  const handleCloseBurger = () => {
    document.body.classList.remove('body--overflow-hidden');
    burgerRef.current.classList.remove('burger--opened');
  };

  const handleOnClick = () => {
    document.body.classList.remove('body--overflow-hidden');
  }

  useEffect(() => {
    getGenres()
      .then((response) => {
        const newGenres = [...response.data.genres];

        setGenres(newGenres);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      id="burger-mobile"
      ref={burgerRef}
      className="burger grid"
    >
      <div className="burger__header">
        <div className="burger__header-presection">
          <Avatar
            color="default"
            showFallback
            src="https://images.unsplash.com/broken"
          />

          <h3 className="burger__title">{session?.user.username}</h3>
        </div>

        <Button
          className="burger__close"
          onClick={handleCloseBurger}
          isIconOnly>
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
        <ul>
          <li>
            <Link 
              className="burger__link"
              href={`/profile/${session?.user.username}`}
              onClick={handleOnClick}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <g clipPath="url(#clip0_2677_4992)">
                    <path
                      d="M11.666 1.27759C10.9153 1.28926 10.181 1.49882 9.53716 1.8851C8.89336 2.27138 8.3629 2.8207 7.99932 3.47759C7.63575 2.8207 7.10528 2.27138 6.46148 1.8851C5.81768 1.49882 5.08335 1.28926 4.33265 1.27759C3.13595 1.32958 2.00846 1.85309 1.19651 2.73374C0.384561 3.61439 -0.0458459 4.7806 -0.000678848 5.97759C-0.000678848 9.00892 3.18999 12.3196 5.86599 14.5643C6.46347 15.0663 7.21889 15.3416 7.99932 15.3416C8.77975 15.3416 9.53518 15.0663 10.1327 14.5643C12.8087 12.3196 15.9993 9.00892 15.9993 5.97759C16.0445 4.7806 15.6141 3.61439 14.8021 2.73374C13.9902 1.85309 12.8627 1.32958 11.666 1.27759ZM9.27599 13.5443C8.91864 13.8452 8.46649 14.0102 7.99932 14.0102C7.53215 14.0102 7.08 13.8452 6.72265 13.5443C3.29732 10.6703 1.33265 7.91292 1.33265 5.97759C1.28708 5.13406 1.5769 4.30674 2.1389 3.67605C2.70089 3.04537 3.48948 2.66249 4.33265 2.61092C5.17583 2.66249 5.96441 3.04537 6.52641 3.67605C7.08841 4.30674 7.37823 5.13406 7.33265 5.97759C7.33265 6.1544 7.40289 6.32397 7.52792 6.44899C7.65294 6.57402 7.82251 6.64425 7.99932 6.64425C8.17613 6.64425 8.3457 6.57402 8.47073 6.44899C8.59575 6.32397 8.66599 6.1544 8.66599 5.97759C8.62041 5.13406 8.91023 4.30674 9.47223 3.67605C10.0342 3.04537 10.8228 2.66249 11.666 2.61092C12.5092 2.66249 13.2977 3.04537 13.8597 3.67605C14.4217 4.30674 14.7116 5.13406 14.666 5.97759C14.666 7.91292 12.7013 10.6703 9.27599 13.5416V13.5443Z"
                      fill="#98A2B3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2677_4992">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              My Collection
            </Link>
          </li>
        </ul>

        <Button 
          className="burger__link burger__link--sign-out" 
          disableAnimation
          onClick={() => {
            handleOnClick();
            signOut();
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <g clipPath="url(#clip0_2677_4561)">
                <path
                  d="M15.2195 6.11421L12.6335 3.52821C12.5078 3.40677 12.3394 3.33957 12.1646 3.34109C11.9898 3.34261 11.8226 3.41272 11.699 3.53633C11.5754 3.65993 11.5052 3.82714 11.5037 4.00194C11.5022 4.17674 11.5694 4.34514 11.6908 4.47087L14.2768 7.05687C14.3537 7.13522 14.4208 7.22252 14.4768 7.31687C14.4668 7.31687 14.4588 7.31154 14.4488 7.31154L3.99284 7.33287C3.81603 7.33287 3.64646 7.40311 3.52143 7.52813C3.39641 7.65316 3.32617 7.82273 3.32617 7.99954C3.32617 8.17635 3.39641 8.34592 3.52143 8.47094C3.64646 8.59597 3.81603 8.66621 3.99284 8.66621L14.4448 8.64487C14.4635 8.64487 14.4788 8.63554 14.4968 8.63421C14.4377 8.74698 14.3627 8.8507 14.2742 8.9422L11.6882 11.5282C11.6245 11.5897 11.5737 11.6633 11.5388 11.7446C11.5038 11.8259 11.4854 11.9134 11.4847 12.0019C11.4839 12.0905 11.5008 12.1782 11.5343 12.2602C11.5678 12.3421 11.6173 12.4165 11.6799 12.4791C11.7425 12.5417 11.8169 12.5912 11.8989 12.6248C11.9808 12.6583 12.0686 12.6751 12.1571 12.6744C12.2456 12.6736 12.3331 12.6552 12.4144 12.6203C12.4958 12.5853 12.5693 12.5345 12.6308 12.4709L15.2168 9.88487C15.7168 9.3848 15.9976 8.70664 15.9976 7.99954C15.9976 7.29243 15.7168 6.61428 15.2168 6.11421H15.2195Z"
                  fill="#F04438"
                />
                <path
                  d="M4.66667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H4.66667C4.84348 1.33333 5.01305 1.2631 5.13807 1.13807C5.2631 1.01305 5.33333 0.843478 5.33333 0.666667C5.33333 0.489856 5.2631 0.320286 5.13807 0.195262C5.01305 0.0702379 4.84348 0 4.66667 0L3.33333 0C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H4.66667C4.84348 16 5.01305 15.9298 5.13807 15.8047C5.2631 15.6797 5.33333 15.5101 5.33333 15.3333C5.33333 15.1565 5.2631 14.987 5.13807 14.8619C5.01305 14.7369 4.84348 14.6667 4.66667 14.6667Z"
                  fill="#F04438"
                />
              </g>
              <defs>
                <clipPath id="clip0_2677_4561">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Sign out
        </Button>
      </div>
    </div>
  );
};
