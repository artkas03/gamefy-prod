import React from 'react';

import './styles.scss';
import Image from 'next/image';

import logo from '@/img/logo.png';
import Link from 'next/link';
import footerConfig from './footerConfig';
import { Divider } from '@nextui-org/react';

export const Footer = () => {
  return (
    <div className="footer__wrapper grid">
      <div className="footer">
        <div className="footer__top">
          <Image
            className="footer__logo footer__logo--mobile"
            height={24}
            width={70}
            src={logo?.src}
            alt="logo"
          />

          <div className="footer__columns">
            <Image
              className="footer__logo footer__logo--tablet"
              height={24}
              width={70}
              src={logo?.src}
              alt="logo"
            />

            {footerConfig.map(({ id, title, links }) => (
              <div key={id} className="footer__column">
                <h3 className="footer__column-list-title">{title}</h3>

                <ul className="footer__column-list">
                  {links.map(({ link, relativePath }) => (
                    <li key={relativePath} className="footer__column-list-item">
                      <Link
                        href={relativePath}
                        className="footer__column-list-item-link">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__column footer__column--links-desk">
              <h3 className="footer__column-list-title">Follow us</h3>

              <ul className="footer__column-list">
                <li className="footer__column-list-item">
                  <Link href="" className="footer__column-list-item-link">
                    Instagram
                  </Link>
                </li>
                <li className="footer__column-list-item">
                  <Link href="" className="footer__column-list-item-link">
                    Discord
                  </Link>
                </li>
                <li className="footer__column-list-item">
                  <Link href="" className="footer__column-list-item-link">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__column footer__column--links-mobile">
            <ul className="footer__column-list footer__column-list--mobile">
              <li className="footer__column-list-item">
                <Link href="" className="footer__column-list-item-link">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.7048 2.25H22.0128L14.7858 10.51L23.2878 21.75H16.6308L11.4168 14.933L5.45084 21.75H2.14084L9.87084 12.915L1.71484 2.25H8.54084L13.2538 8.481L18.7048 2.25ZM17.5438 19.77H19.3768L7.54484 4.126H5.57784L17.5438 19.77Z"
                      fill="#98A2B3"
                    />
                  </svg>
                </Link>
              </li>
              <li className="footer__column-list-item">
                <Link href="" className="footer__column-list-item-link">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.502 2C6.9791 2 2.50195 6.47715 2.50195 12C2.50195 16.9913 6.1588 21.1283 10.9395 21.8785V14.8906H8.40038V12H10.9395V9.79688C10.9395 7.29063 12.4324 5.90625 14.7166 5.90625C15.8107 5.90625 16.9551 6.10156 16.9551 6.10156V8.5625H15.6941C14.4519 8.5625 14.0645 9.33334 14.0645 10.1242V12H16.8379L16.3946 14.8906H14.0645V21.8785C18.8451 21.1283 22.502 16.9913 22.502 12C22.502 6.47715 18.0248 2 12.502 2Z"
                      fill="#98A2B3"
                    />
                  </svg>
                </Link>
              </li>
              <li className="footer__column-list-item">
                <Link href="" className="footer__column-list-item-link">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5291 2.00098C14.6545 2.00284 15.2248 2.00879 15.7176 2.02346L15.9117 2.02981C16.1359 2.03778 16.3571 2.04778 16.6238 2.06028C17.6879 2.10944 18.4138 2.27778 19.0513 2.52528C19.7104 2.77944 20.2671 3.12278 20.8229 3.67861C21.3779 4.23444 21.7213 4.79278 21.9763 5.45028C22.2229 6.08694 22.3913 6.81361 22.4413 7.87778C22.4532 8.14444 22.4628 8.36564 22.4707 8.58989L22.477 8.78397C22.4916 9.27672 22.4983 9.8471 22.5004 10.9725L22.5012 11.7182C22.5013 11.8093 22.5013 11.9033 22.5013 12.0003L22.5012 12.2824L22.5006 13.0281C22.4987 14.1535 22.4928 14.7238 22.4781 15.2166L22.4717 15.4107C22.4638 15.6349 22.4538 15.8561 22.4413 16.1228C22.3921 17.1869 22.2229 17.9128 21.9763 18.5503C21.7221 19.2094 21.3779 19.7661 20.8229 20.3219C20.2671 20.8769 19.7079 21.2203 19.0513 21.4753C18.4138 21.7219 17.6879 21.8903 16.6238 21.9403C16.3571 21.9522 16.1359 21.9618 15.9117 21.9697L15.7176 21.976C15.2248 21.9906 14.6545 21.9973 13.5291 21.9994L12.7834 22.0002C12.6923 22.0003 12.5983 22.0003 12.5013 22.0003L12.2192 22.0002L11.4735 21.9996C10.3481 21.9977 9.77769 21.9918 9.28494 21.9771L9.09086 21.9707C8.86661 21.9628 8.64541 21.9528 8.37875 21.9403C7.31458 21.8911 6.58958 21.7219 5.95125 21.4753C5.29291 21.2211 4.73541 20.8769 4.17958 20.3219C3.62375 19.7661 3.28125 19.2069 3.02625 18.5503C2.77875 17.9128 2.61125 17.1869 2.56125 16.1228C2.54937 15.8561 2.53968 15.6349 2.53183 15.4107L2.52554 15.2166C2.51091 14.7238 2.50424 14.1535 2.50208 13.0281L2.50195 10.9725C2.50381 9.8471 2.50976 9.27672 2.52443 8.78397L2.53078 8.58989C2.53875 8.36564 2.54875 8.14444 2.56125 7.87778C2.61041 6.81278 2.77875 6.08778 3.02625 5.45028C3.28041 4.79194 3.62375 4.23444 4.17958 3.67861C4.73541 3.12278 5.29375 2.78028 5.95125 2.52528C6.58875 2.27778 7.31375 2.11028 8.37875 2.06028C8.64541 2.0484 8.86661 2.03871 9.09086 2.03086L9.28494 2.02457C9.77769 2.00994 10.3481 2.00327 11.4735 2.00111L13.5291 2.00098ZM12.5013 7.00028C9.73835 7.00028 7.50125 9.23981 7.50125 12.0003C7.50125 14.7632 9.74078 17.0003 12.5013 17.0003C15.2642 17.0003 17.5013 14.7607 17.5013 12.0003C17.5013 9.23738 15.2617 7.00028 12.5013 7.00028ZM12.5013 9.00028C14.1582 9.00028 15.5013 10.3429 15.5013 12.0003C15.5013 13.6572 14.1586 15.0003 12.5013 15.0003C10.8444 15.0003 9.50125 13.6576 9.50125 12.0003C9.50125 10.3434 10.8439 9.00028 12.5013 9.00028ZM17.7513 5.50028C17.062 5.50028 16.5013 6.06018 16.5013 6.74943C16.5013 7.43867 17.0612 7.99944 17.7513 7.99944C18.4405 7.99944 19.0013 7.43954 19.0013 6.74943C19.0013 6.06018 18.4396 5.49941 17.7513 5.50028Z"
                      fill="#98A2B3"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <Divider className="footer__divider" orientation="horizontal" />

          <p className="footer__bottom-text">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
