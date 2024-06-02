import React from 'react'

const PageComponent = ({ data }) => {
  return (
    <div>{data.data.datum1.innerDatum}</div>
  )
}

export default PageComponent