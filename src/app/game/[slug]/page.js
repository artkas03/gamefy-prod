import React from 'react'
import PageComponent from './PageComponent';
import helloworld from '@/controllers/helloworld';

const getDataForGamepage = async(slug) => {
  try {
    const data = await helloworld(slug);
    
    console.log(data);

    return data;
  } catch(err) {
    console.error(err);
  }
}

async function Gamepage({ params }) {
  const data = await getDataForGamepage(params.slug);
  
  return (
    <PageComponent data={data} />
  )
}

export default Gamepage;