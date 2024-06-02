'use client';
import React, { useEffect } from 'react'

const PageComponent = ({ data }) => {
  useEffect(() => {
    console.log(JSON.stringify(data))
  });

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default PageComponent