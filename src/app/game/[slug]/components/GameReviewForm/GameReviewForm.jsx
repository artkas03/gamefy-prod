'use client';
import { UserContext } from '@/context/UserContext';
import React, { useContext, useState } from 'react';


import { Button, Textarea } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import axiosInstance from '@/utils/scripts/api';

export const GameReviewForm = ({
  gameSlug = ''
}) => {
  const { data: session } = useSession();
  const [value, setValue] = useState('');

  const handleOnChange = ({ target }) => {
    if (target.value.length > 500) {
      setValue(() => target.value.slice(0, 500))
    } else {
      setValue(() => target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.post('/comments/createComment', {
      text: value.trim(),
      userEmail: session?.user.email,
      gameSlug
    });

    setValue(() => '');
  }

  return (
    <>
      {session?.user ? (
        <form 
          className="comment-form"
          onSubmit={handleSubmit}
        >
          <Textarea
            isRequired
            placeholder="What do you think?"
            className="comment-form__textarea"
            value={value}
            onChange={handleOnChange}
          />

          <div className="comment-form__counter">{`${value.length}/500 characters`}</div>

          <Button 
            type="submit" 
            className="comment-form__submit primary-button"
          >
            Post
          </Button>
        </form>
      ) : (
        <></>
      )}
    </>
  )
}
