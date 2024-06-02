import React, { useEffect, useState } from 'react';

import './styles.scss';
// import axiosInstance from '@/utils/scripts/api';
import Link from 'next/link';
import { Button, Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const HeaderBarSearchPreview = ({
  searchValue,
  handleLinkOnClick,
  ...restProps
}) => {
  const [gamesToShow, setGamesToShow] = useState([]);
  const router = useRouter();

  // useEffect(() => {
  //   axiosInstance
  //     .get(`/games/getGamesForSearch?query=${searchValue}`)
  //     .then((response) => setGamesToShow(response.data.games))
  //     .catch(console.error);
  // }, [searchValue]);

  const handleSearchForClick = () => {
    handleLinkOnClick();
    router.replace(`/search-result?query=${searchValue}`)
  }

  return (
    <div className="search-preview" {...restProps}>
      <div className="search-preview__games">
        {(searchValue && gamesToShow.length > 0) && gamesToShow.map(({ slug, name }) => (
          <Link
            href={`/${slug}`}
            onClick={handleLinkOnClick}
            className="search-preview__game"
            key={slug}>
            {name}
          </Link>
        ))}

        {(searchValue && !gamesToShow.length) && (
          <p>There are no results with query {`"${searchValue}"`}</p>
        )}
      </div>

      <Divider />

      <Button
        className="search-preview__button"
        fullWidth
        disableAnimation
        disableRipple
        onClick={handleSearchForClick}
        startContent={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="search" clipPath="url(#clip0_2277_659)">
              <path
                id="Vector"
                d="M23.7068 22.2938L17.7378 16.3248C19.3644 14.3354 20.1642 11.7969 19.9716 9.23432C19.7791 6.67179 18.609 4.28129 16.7034 2.55728C14.7977 0.833269 12.3024 -0.0923492 9.73342 -0.0281174C7.16447 0.0361144 4.71849 1.08528 2.9014 2.90237C1.08431 4.71946 0.0351379 7.16545 -0.029094 9.7344C-0.0933258 12.3034 0.832293 14.7987 2.5563 16.7043C4.28031 18.61 6.67081 19.7801 9.23334 19.9726C11.7959 20.1651 14.3344 19.3654 16.3238 17.7388L22.2928 23.7078C22.4814 23.8899 22.734 23.9907 22.9962 23.9884C23.2584 23.9862 23.5092 23.881 23.6946 23.6956C23.88 23.5102 23.9852 23.2594 23.9875 22.9972C23.9897 22.735 23.8889 22.4824 23.7068 22.2938ZM9.99978 18.0008C8.41753 18.0008 6.87081 17.5316 5.55522 16.6525C4.23963 15.7735 3.21425 14.524 2.60875 13.0622C2.00324 11.6004 1.84482 9.99189 2.1535 8.44004C2.46218 6.88819 3.22411 5.46272 4.34293 4.3439C5.46175 3.22508 6.88721 2.46316 8.43906 2.15448C9.99091 1.84579 11.5994 2.00422 13.0613 2.60972C14.5231 3.21522 15.7725 4.2406 16.6515 5.5562C17.5306 6.87179 17.9998 8.41851 17.9998 10.0008C17.9974 12.1218 17.1538 14.1552 15.654 15.655C14.1542 17.1548 12.1208 17.9984 9.99978 18.0008Z"
                fill="#475467"
              />
            </g>
            <defs>
              <clipPath id="clip0_2277_659">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
      >
        <p>
          {`Search for "${searchValue}"`}
        </p>
      </Button>
    </div>
  );
};

export default HeaderBarSearchPreview;
