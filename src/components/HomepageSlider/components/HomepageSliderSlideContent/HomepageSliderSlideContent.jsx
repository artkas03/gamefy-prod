'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// import logo from '@/img/company-logo1.png';``

import './styles.scss';
import {
  Button,
  ButtonGroup,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
// import { useSession } from 'next-auth/react';
// import getAverateMark from '@/utils/scripts/getAverageMark';
import collectionListsKeys from '@/utils/scripts/collectionListsKeys';
import cn from 'classnames';
// import axiosInstance from '@/utils/scripts/api';
import { useRouter } from 'next/navigation';

export const HomepageSliderSlideContent = ({
  image,
  gameData,
  isHideContent = false,
}) => {
  console.log('Slider data: ', gameData);
  // TODO: Rewrite hadnling adding to the user collection
  const [addedToCollection, setAddedToCollection] = useState('');

  // const { data: session } = useSession();

  const router = useRouter();

  const ImageComponent = () => (
    <Image
      src={image}
      // TODO: make normal alt
      alt={'ALT'}
      width={1280}
      height={765}
      priority
      placeholder='empty'
      blurDataURL='data:image/gif;base64,R0lGODlhBAADAPAAAGZwhQAAACH5BAAAAAAALAAAAAAEAAMAAAIDhI9WADs='
      style={{
        objectFit: 'cover',
      }}
      className="swiper-background__image"
    />
  );

  if (isHideContent) {
    return <ImageComponent />;
  }

  const { genres, name, company, userScore, description } = gameData;

  const genre = genres[0] || '';
  const totalMark = 0;

  // const handleAddToCollection = async (newCollection) => {
  //   const currentCollection = addedToCollection;
  //   setAddedToCollection(newCollection);

  //   axiosInstance
  //     .post('/userCollections/addGameToCollection', {
  //       userEmail: session?.user.email,
  //       gameSlug: gameData.slug,
  //       oldCollection: currentCollection,
  //       newCollection,
  //     })
  //     .then((response) => setAddedToCollection(response.data.newCollection))
  //     .catch((err) => {
  //       setAddedToCollection(currentCollection);
  //       console.error(err);
  //     });
  // };

  // const handleDeleteFromCollection = () => {
  //   if (!addedToCollection) {
  //     return;
  //   }

  //   const currentCollection = addedToCollection;

  //   axiosInstance
  //     .patch('/userCollections/deleteGameFromCollection', {
  //       userEmail: session?.user.email,
  //       gameSlug: gameData.slug,
  //       currentCollection,
  //     })
  //     .catch((err) => {
  //       setAddedToCollection(currentCollection);
  //       console.error(err);
  //     });
  // };

  return (
    <>
      <ImageComponent />

      {!isHideContent && (
        <div className="swiper-background__content">
          <div className="swiper-background__wrapper grid">
            <Chip color="primary" className="swiper-background__chip">
              {genres[0].toLocaleUpperCase()}
            </Chip>

            <h3 className="swiper-background__title">{name}</h3>

            <div className="swiper-background__details">
              {/* <Image
                src={logo}
                alt="ALT"
                className="swiper-background__company-logo"
                width={16}
                height={16}
              /> */}

              <h4 className="swiper-background__company-name">{company.name}</h4>

              <div className="swiper-background__company-delimeter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none">
                  <circle cx="2" cy="2" r="2" fill="#F2F4F7" />
                </svg>
              </div>

              <div className="swiper-background__mark">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_223_26699)">
                    <path
                      d="M0.884795 8.26672L3.25813 10.0001L2.3568 12.7914C2.21114 13.2243 2.20929 13.6927 2.35154 14.1268C2.49378 14.5608 2.77249 14.9373 3.14613 15.2001C3.51336 15.4712 3.95839 15.6165 4.4149 15.6142C4.87141 15.6119 5.31496 15.4622 5.67946 15.1874L8.00013 13.4794L10.3215 15.1854C10.688 15.455 11.1307 15.6015 11.5857 15.6037C12.0408 15.6059 12.4848 15.4638 12.854 15.1977C13.2232 14.9317 13.4985 14.5554 13.6403 14.123C13.7822 13.6907 13.7833 13.2244 13.6435 12.7914L12.7421 10.0001L15.1155 8.26672C15.4816 7.99906 15.7537 7.62255 15.893 7.19098C16.0324 6.7594 16.0317 6.29484 15.8912 5.86364C15.7508 5.43244 15.4776 5.05667 15.1108 4.78999C14.744 4.52331 14.3023 4.37936 13.8488 4.37872H10.9335L10.0488 1.62138C9.90968 1.18736 9.63631 0.808727 9.26811 0.540094C8.89991 0.271462 8.45591 0.126709 8.00013 0.126709C7.54435 0.126709 7.10035 0.271462 6.73215 0.540094C6.36395 0.808727 6.09058 1.18736 5.95146 1.62138L5.0668 4.37872H2.15413C1.70062 4.37936 1.25892 4.52331 0.892115 4.78999C0.525307 5.05667 0.252156 5.43244 0.111676 5.86364C-0.0288034 6.29484 -0.0294251 6.7594 0.1099 7.19098C0.249224 7.62255 0.521369 7.99906 0.887462 8.26672H0.884795Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_26699">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p>{totalMark}</p>
              </div>
            </div>

            <p className="swiper-background__description">{description}</p>

            <ButtonGroup className="swiper-background__buttons">
              <Button
                color="primary"
                className="swiper-background__button primary-button"
                startContent={<p>Explore</p>}
                onClick={() => router.replace(`/${gameData.slug}`)}
              />

              {!false ? (
                <Button
                  className="swiper-background__button secondary-button"
                  onClick={() => router.replace('/authorization')}
                  startContent={
                    // TODO: Change text to 'Add to collection' when the user is logged in
                    <p>Sing in to add to collection</p>
                  }
                />
              ) : (
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="swiper-background__button secondary-button"
                      startContent={
                        // TODO: Change text to 'Add to collection' when the user is logged in
                        <p>Add to collection</p>
                      }
                      endContent={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none">
                            <g clipPath="url(#clip0_2556_2539)">
                              <path
                                d="M12.5 0C10.1266 0 7.80655 0.703788 5.83316 2.02236C3.85977 3.34094 2.3217 5.21509 1.41345 7.4078C0.505199 9.60051 0.267559 12.0133 0.730582 14.3411C1.1936 16.6689 2.33649 18.8071 4.01472 20.4853C5.69295 22.1635 7.83115 23.3064 10.1589 23.7694C12.4867 24.2324 14.8995 23.9948 17.0922 23.0866C19.2849 22.1783 21.1591 20.6402 22.4776 18.6668C23.7962 16.6935 24.5 14.3734 24.5 12C24.4966 8.81846 23.2312 5.76821 20.9815 3.51852C18.7318 1.26883 15.6815 0.00344108 12.5 0ZM12.5 22C10.5222 22 8.58879 21.4135 6.9443 20.3147C5.29981 19.2159 4.01809 17.6541 3.26121 15.8268C2.50433 13.9996 2.3063 11.9889 2.69215 10.0491C3.078 8.10929 4.03041 6.32746 5.42894 4.92893C6.82746 3.53041 8.60929 2.578 10.5491 2.19215C12.4889 1.8063 14.4996 2.00433 16.3268 2.7612C18.1541 3.51808 19.7159 4.79981 20.8147 6.4443C21.9135 8.08879 22.5 10.0222 22.5 12C22.4971 14.6513 21.4426 17.1931 19.5679 19.0679C17.6931 20.9426 15.1513 21.9971 12.5 22ZM17.5 12C17.5 12.2652 17.3946 12.5196 17.2071 12.7071C17.0196 12.8946 16.7652 13 16.5 13H13.5V16C13.5 16.2652 13.3946 16.5196 13.2071 16.7071C13.0196 16.8946 12.7652 17 12.5 17C12.2348 17 11.9804 16.8946 11.7929 16.7071C11.6054 16.5196 11.5 16.2652 11.5 16V13H8.50001C8.23479 13 7.98043 12.8946 7.7929 12.7071C7.60536 12.5196 7.50001 12.2652 7.50001 12C7.50001 11.7348 7.60536 11.4804 7.7929 11.2929C7.98043 11.1054 8.23479 11 8.50001 11H11.5V8C11.5 7.73478 11.6054 7.48043 11.7929 7.29289C11.9804 7.10536 12.2348 7 12.5 7C12.7652 7 13.0196 7.10536 13.2071 7.29289C13.3946 7.48043 13.5 7.73478 13.5 8V11H16.5C16.7652 11 17.0196 11.1054 17.2071 11.2929C17.3946 11.4804 17.5 11.7348 17.5 12Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2556_2539">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                      }
                    />
                  </DropdownTrigger>

                  {false && (
                    <DropdownMenu>
                      {Object.entries(collectionListsKeys).map(
                        ([key, value]) => (
                          <DropdownItem
                            onClick={() => handleAddToCollection(key)}
                            className={cn('game-card__dropdown-item', {
                              'game-card__dropdown-item--active':
                                key === addedToCollection,
                            })}
                            key={key}>
                            {value}

                            <div className="game-card__dropdown-item-icon">
                              {key === addedToCollection ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none">
                                  <g clipPath="url(#clip0_2610_5807)">
                                    <path
                                      d="M8 0C3.58867 0 0 3.58867 0 8C0 12.4113 3.58867 16 8 16C12.4113 16 16 12.4113 16 8C16 3.58867 12.4113 0 8 0ZM12.1333 7.008L9.18267 9.90467C8.66067 10.4167 7.98867 10.672 7.316 10.672C6.65067 10.672 5.98533 10.4213 5.46533 9.91933L4.19933 8.67467C3.93667 8.41667 3.93333 7.99467 4.19133 7.732C4.44867 7.46867 4.872 7.46533 5.134 7.724L6.396 8.96467C6.91333 9.46467 7.73 9.462 8.25 8.95267L11.2 6.05667C11.462 5.798 11.8827 5.80267 12.1427 6.06533C12.4007 6.328 12.3967 6.75 12.1333 7.008Z"
                                      fill="white"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2610_5807">
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none">
                                  <g clipPath="url(#clip0_2599_9387)">
                                    <path
                                      d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0ZM8 14.6667C6.68146 14.6667 5.39253 14.2757 4.2962 13.5431C3.19987 12.8106 2.34539 11.7694 1.84081 10.5512C1.33622 9.33305 1.2042 7.99261 1.46144 6.6994C1.71867 5.40619 2.35361 4.21831 3.28596 3.28596C4.21831 2.35361 5.4062 1.71867 6.6994 1.46143C7.99261 1.2042 9.33305 1.33622 10.5512 1.8408C11.7694 2.34539 12.8106 3.19987 13.5431 4.2962C14.2757 5.39253 14.6667 6.68146 14.6667 8C14.6647 9.76752 13.9617 11.4621 12.7119 12.7119C11.4621 13.9617 9.76752 14.6647 8 14.6667ZM11.3333 8C11.3333 8.17681 11.2631 8.34638 11.1381 8.47141C11.0131 8.59643 10.8435 8.66667 10.6667 8.66667H8.66667V10.6667C8.66667 10.8435 8.59643 11.013 8.47141 11.1381C8.34638 11.2631 8.17682 11.3333 8 11.3333C7.82319 11.3333 7.65362 11.2631 7.5286 11.1381C7.40358 11.013 7.33334 10.8435 7.33334 10.6667V8.66667H5.33334C5.15653 8.66667 4.98696 8.59643 4.86193 8.47141C4.73691 8.34638 4.66667 8.17681 4.66667 8C4.66667 7.82319 4.73691 7.65362 4.86193 7.5286C4.98696 7.40357 5.15653 7.33333 5.33334 7.33333H7.33334V5.33333C7.33334 5.15652 7.40358 4.98695 7.5286 4.86193C7.65362 4.73691 7.82319 4.66667 8 4.66667C8.17682 4.66667 8.34638 4.73691 8.47141 4.86193C8.59643 4.98695 8.66667 5.15652 8.66667 5.33333V7.33333H10.6667C10.8435 7.33333 11.0131 7.40357 11.1381 7.5286C11.2631 7.65362 11.3333 7.82319 11.3333 8Z"
                                      fill="#98A2B3"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2599_9387">
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              )}
                            </div>
                          </DropdownItem>
                        )
                      )}

                      <DropdownItem
                        onClick={handleDeleteFromCollection}
                        className="game-card__dropdown-item game-card__dropdown-item--delete">
                        {'Delete'}

                        <div className="game-card__dropdown-item-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 16 30"
                            fill="none">
                            <g clipPath="url(#clip0_108_3382)">
                              <path
                                d="M21.2192 4.54797H18.1192C17.8871 3.41939 17.2731 2.40532 16.3805 1.67669C15.4879 0.948064 14.3714 0.549428 13.2192 0.547974L11.2192 0.547974C10.067 0.549428 8.95056 0.948064 8.05799 1.67669C7.16542 2.40532 6.55133 3.41939 6.31924 4.54797H3.21924C2.95402 4.54797 2.69967 4.65333 2.51213 4.84087C2.3246 5.0284 2.21924 5.28276 2.21924 5.54797C2.21924 5.81319 2.3246 6.06754 2.51213 6.25508C2.69967 6.44262 2.95402 6.54797 3.21924 6.54797H4.21924V19.548C4.22083 20.8736 4.74812 22.1444 5.68546 23.0818C6.6228 24.0191 7.89364 24.5464 9.21924 24.548H15.2192C16.5448 24.5464 17.8157 24.0191 18.753 23.0818C19.6904 22.1444 20.2177 20.8736 20.2192 19.548V6.54797H21.2192C21.4845 6.54797 21.7388 6.44262 21.9263 6.25508C22.1139 6.06754 22.2192 5.81319 22.2192 5.54797C22.2192 5.28276 22.1139 5.0284 21.9263 4.84087C21.7388 4.65333 21.4845 4.54797 21.2192 4.54797ZM11.2192 2.54797H13.2192C13.8395 2.54873 14.4444 2.74135 14.9509 3.09942C15.4573 3.45748 15.8407 3.96347 16.0482 4.54797H8.39024C8.59782 3.96347 8.98114 3.45748 9.48763 3.09942C9.99411 2.74135 10.599 2.54873 11.2192 2.54797ZM18.2192 19.548C18.2192 20.3436 17.9032 21.1067 17.3406 21.6693C16.778 22.2319 16.0149 22.548 15.2192 22.548H9.21924C8.42359 22.548 7.66053 22.2319 7.09792 21.6693C6.53531 21.1067 6.21924 20.3436 6.21924 19.548V6.54797H18.2192V19.548Z"
                                fill="#B42318"
                              />
                              <path
                                d="M10.2192 18.5473C10.4845 18.5473 10.7388 18.442 10.9263 18.2545C11.1139 18.0669 11.2192 17.8126 11.2192 17.5473V11.5474C11.2192 11.2821 11.1139 11.0278 10.9263 10.8403C10.7388 10.6527 10.4845 10.5474 10.2192 10.5474C9.95402 10.5474 9.69967 10.6527 9.51213 10.8403C9.3246 11.0278 9.21924 11.2821 9.21924 11.5474V17.5473C9.21924 17.8126 9.3246 18.0669 9.51213 18.2545C9.69967 18.442 9.95402 18.5473 10.2192 18.5473Z"
                                fill="#B42318"
                              />
                              <path
                                d="M14.219 18.5473C14.4842 18.5473 14.7386 18.442 14.9261 18.2545C15.1136 18.0669 15.219 17.8126 15.219 17.5473V11.5474C15.219 11.2821 15.1136 11.0278 14.9261 10.8403C14.7386 10.6527 14.4842 10.5474 14.219 10.5474C13.9538 10.5474 13.6994 10.6527 13.5119 10.8403C13.3244 11.0278 13.219 11.2821 13.219 11.5474V17.5473C13.219 17.8126 13.3244 18.0669 13.5119 18.2545C13.6994 18.442 13.9538 18.5473 14.219 18.5473Z"
                                fill="#B42318"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_108_3382">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.219238 0.547974)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </Dropdown>
              )}
            </ButtonGroup>
          </div>
        </div>
      )}
    </>
  );
};
