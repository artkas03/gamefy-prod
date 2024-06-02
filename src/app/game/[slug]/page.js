import React from 'react'
import PageComponent from './PageComponent';
import helloworld from '@/controllers/helloworld';

async function Gamepage({ params }) {
  const data = await helloworld(params.slug);

  console.log(data);

  return (
    <PageComponent data={data} />
  )
}

export default Gamepage;