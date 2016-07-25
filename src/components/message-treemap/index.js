import React from 'react'
import { Treemap } from 'react-vis'

export default ({ data }) => {
  if (!data.length) return null

  const treeMapData = {
    title: '',
    children: data
  }

  return (
    <Treemap
      title={'Messages treemap'}
      height={ 1280 }
      width={ 1280 }
      data={ treeMapData }
    />
  )
}
