'use client';
import React from 'react';
import { GameRequirementItem } from '../GameRequirementItem';
import { GamePreview } from '../GamePreview';

const defaultGameData = {
  userScore: {
    markingRaw: {
      markingRaw: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      total: 0,
    },
  },
};

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
  const {
    requirements
  } = gameData;

  console.log(gameData);

  const averageGameMark = 0;

  return (
    <div className="game grid">
      <GamePreview gameSlug={gameData.slug} gameData={gameData} />

      <div className="game__requirements grid">
        <h3 className="game__requirements-title game__title">
          System requirements
        </h3>

        <GameRequirementItem title={'Minimum:'} requirements={{
          additionalNotes: requirements.minimumAdditionalNotes,
          memory: requirements.minimumMemory,
          gpu: requirements.minimumGPU,
          os: requirements.minimumOS,
          preInfo: requirements.minimumPreInfo,
          processor: requirements.minimumProcessor,
          storage: requirements.minimumStorage,
        }} />

        <GameRequirementItem title={'Recommended:'} requirements={{
          additionalNotes: requirements.recommendedAdditionalNotes,
          memory: requirements.recommendedMemory,
          gpu: requirements.recommendedGPU,
          os: requirements.recommendedOS,
          preInfo: requirements.recommendedPreInfo,
          processor: requirements.recommendedProcessor,
          storage: requirements.recommendedStorage,
        }} />
      </div>
    </div>
  );
};

export default GamePageComponent;
