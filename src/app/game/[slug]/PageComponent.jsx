'use client';
import React, { useEffect } from 'react'

const PageComponent = ({ data, slug }) => {
  useEffect(() => {
    console.log(JSON.stringify(data))
  });

  return (
    <div>
      <div>Slug: {slug}</div>
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  )
}

export default PageComponent