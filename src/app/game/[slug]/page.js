import React from 'react'
import GamePageComponent from './components/GamePageComponent/GamePageComponent';

import './styles.scss';

// const getDataForGamepage = async(slug) => {
//   try {
//     const data = await helloworld(slug);

//     return data;
//   } catch(err) {
//     console.error(err);
//   }
// }

async function Gamepage({ params }) {
  const data = await getDataForGamepage(params.slug) || {};
  
  return (
    <GamePageComponent gameData={data} />
  )
}

export default Gamepage;