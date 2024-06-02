import React from 'react'
import PageComponent from './PageComponent';
import helloworld from '@/controllers/helloworld';

async function Gamepage({ params }) {
  const data = await helloworld(params.slug);

  return (
    <PageComponent data={data} />
  )
}

export default Gamepage;