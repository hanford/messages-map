import React from 'react'
import { Treemap } from 'react-vis'
import sortOn from 'sort-on'

export default ({ data }) => {
  if (!data.length) return null

  const treeMapData = {
    title: '',
    children: sortOn(data, '-size')
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
