import React from 'react'
import PageComponent from './PageComponent';

const Gamepage = async() => {
  const response = await fetch('http://localhost:3000/api/helloworld');

  const data = await response.json();

  return (
    <PageComponent data={data} />
  )
}

export default Gamepage;