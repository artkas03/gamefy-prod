import { BREAKPOINTS } from '@/src/appconfig';
import { Divider } from '@nextui-org/react';
import React from 'react';
// import { useBreakpoint } from 'use-breakpoint';



export const GameDescription = ({
  descriptionText = '',
  platform = [],
  releaseDate = '',
  company = '',
  genre = [],
  voice = [],
  subtitles = [],
  totalNumberOfMarks = 0,
  averageGameMark = 0
}) => {
  return (
    <div className="description grid">
      <h3 className="description__title game__title">Description</h3>

      <p className="description__text">
        {descriptionText}
      </p>

      <div className="description__marks">
        {/* <div className="description__mark">
          <div className="description__mark-text">
            <p className="description__mark-text-category">Metascore</p>

            <p className="description__mark-text-status">Generally Favorable</p>

            <p className="description__mark-text-votes">
              Based on 63 Critic Reviews
            </p>
          </div>

          <div className="description__mark-result">4.7</div>
        </div>

        <Divider
          className="description__divider description__divider--vertical"
          orientation='horizontal'
        /> */}

        <div className="description__mark">
          <div className="description__mark-text">
            <p className="description__mark-text-category">User score</p>

            <p className="description__mark-text-status">Generally Favorable</p>

            <p className="description__mark-text-votes">
              Based on {totalNumberOfMarks} Users Reviews
            </p>
          </div>

          <div className="description__mark-result">{averageGameMark}</div>
        </div>
      </div>

      <div className="description__general">
        <div className="description__general-top">
          <ul className="description__general-list">
            <li className="description__general-item">
              <p className="description__general-item-name">Platform:</p>

              <p className="description__general-item-value">
                {platform.join(', ')}
              </p>
            </li>

            <li className="description__general-item">
              <p className="description__general-item-name">Release date:</p>

              <p className="description__general-item-value">{releaseDate}</p>
            </li>

            <li className="description__general-item">
              <p className="description__general-item-name">Publisher:</p>

              <p className="description__general-item-value">{company}</p>
            </li>

            <li className="description__general-item">
              <p className="description__general-item-name">Genre:</p>

              <p className="description__general-item-value">{genre.join(', ')}</p>
            </li>
          </ul>
        </div>

        <Divider className="description__divider" />

        <div className="description__general-bottom">
          <ul className="description__general-list">
            <li className="description__general-item description__general-item--bottom">
              <p className="description__general-item-name">Voice:</p>

              <p className="description__general-item-value">
                {voice.join(', ')}
              </p>
            </li>

            <li className="description__general-item description__general-item--bottom">
              <p className="description__general-item-name">
                Display languages:
              </p>

              <p className="description__general-item-value">
                {subtitles.join(', ')}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
