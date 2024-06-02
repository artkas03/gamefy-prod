'use client';
import { Button } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export const GameReviewButton = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()

    if (!session?.user) {
      window.scrollTo({
        top: 0
      })
      router.replace('/authorization');
    }
  }

  return (
    <Button onClick={handleClick} className="game__review-score-button primary-button">
      {session?.user ? 'Add review' : 'Sing in to add a review'}
    </Button>
  );
};
