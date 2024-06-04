'use client';
import React from 'react';
import { GameRequirementItem } from '../GameRequirementItem';
import { GamePreview } from '../GamePreview';
import { GameDescription } from '../GameDescription';
import GameMarkList from '../GameMarkList/GameMarkList';
import { GameReviewButton } from '../GameReviewButton';
import { GameReviewForm } from '../GameReviewForm';
import { GameComments } from '../GameComments';
import getAverageMark from '@/utils/scripts/getAverageMark';

const defaultGameData = {
  markingRaw: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
  total: 0,
}

const GamePageComponent = ({ gameData }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [gameData, setGameData] = useState(defaultGameData);
  // const slug = useSearchParams().get('slug');

  // useEffect(() => {
  //   axiosInstance
  //     .get(`/games/${slug}`)
  //     .then((response) => {
  //       setGameData(response.data.gameData);
  //       console.log('gameData: ', JSON.stringify(response.data.gameData));
  //     })
  //     .finally(() => setIsLoading(false));
  // }, [slug]);

  // console.log(isLoading, JSON.stringify(gameData));

  const userScoreToWorkWith = gameData.userScore || defaultGameData;

  const averageGameMark = getAverageMark(userScoreToWorkWith);

  return (
    <div className="game grid">
          <GamePreview gameSlug={gameData?.slug} gameData={gameData} />

          {/* TODO: Implement slider with more images of the game */}

          <GameDescription
            descriptionText={gameData?.description}
            platform={gameData?.platforms}
            releaseDate={gameData?.releaseDate}
            company={gameData?.company}
            genre={gameData?.genres}
            voice={gameData?.voiceLanguages}
            subtitles={gameData?.subtitlesLanguages}
            totalNumberOfMarks={userScoreToWorkWith.total}
            averageGameMark={averageGameMark}
          />

          <div className="game__requirements grid">
            <h3 className="game__requirements-title game__title">
              System requirements
            </h3>

            <GameRequirementItem title={'Minimum:'} requirements={gameData?.requirements.minimum} />

            <GameRequirementItem title={'Recommended:'} requirements={gameData?.requirements.recommended} />
          </div>

          {/* TODO: Implement slider of more game content */}

          <div className="game__review grid">
            <h3 className="game__review-title game__title">Customer reviews</h3>

            <div className="game__review-score">
              {/* TODO: Fix div aspect ration when the value is 0 */}
              <h2 className="game__review-score-result">{averageGameMark}</h2>
              <p className="game__review-score-votes">{userScoreToWorkWith.total} total reviews</p>

              <GameMarkList
                gameSlug={gameData?.slug}
                userScoreData={userScoreToWorkWith}
              />

              <GameReviewButton className="game__review-score-button primary-button" />
            </div>

            <GameReviewForm gameData />

            <div className="game__review-comments">
              <GameComments comments={gameData?.comments} />
            </div>
          </div>

          {/* TODO: Implement slider with similar games */}
        </div>
  );
};

export default GamePageComponent;
