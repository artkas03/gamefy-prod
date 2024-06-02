import React from 'react'
import PageComponent from './PageComponent';
import helloworld from '@/controllers/helloworld';

async function Gamepage() {
  const data = await helloworld();

  return (
    <PageComponent data={data} />
  )
}

export default Gamepage;