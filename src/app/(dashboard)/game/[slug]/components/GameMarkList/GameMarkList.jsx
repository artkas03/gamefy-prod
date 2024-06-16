'use client';
import axiosInstance from '@/utils/scripts/api';
import countMarkPercent from '@/utils/scripts/countMarkPercent';
import { Button, Progress } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import GameMarkListItem from '../GameMarkListItem/GameMarkListItem';

const GameMarkList = ({
  gameSlug,
  userScoreData
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [userMark, setUserMark] = useState('0');

  const {
    markingRaw,
    total
  } = userScoreData;

  const getClickOnMarkHandler = (mark) => () => {
    if (!session?.user) {
      router.replace('/authorization');
    }

    const prevMark = userMark;
    setUserMark(mark + '')

    axiosInstance.patch('/games/markGame', {
      userEmail: session.user.email,
      mark,
      gameSlug
    })
      .catch(() => setUserMark(prevMark));
  };

  useEffect(() => {
    if (session?.user) {
      axiosInstance.get('/comments/getCurrentUserMark' + `?gameSlug=${gameSlug}` + `&userEmail=${session.user.email}`)
        .then((response) => setUserMark(response.data.userMark));
    }
  }, [session?.user, gameSlug]);

  return (
    <ul className="game__review-score-list">
      {Object.entries(markingRaw).map(([ mark, currentMarkNumber ]) => (
        <li key={mark} className="game__review-score-item">
          <GameMarkListItem
            userMark={userMark}
            currentMark={mark}
            currentMarkNumber={currentMarkNumber}
            total={total}
            handleOnClick={getClickOnMarkHandler(mark)}
          />
        </li>
      ))}
    </ul>
  );
};

export default GameMarkList;
