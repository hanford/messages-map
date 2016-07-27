import React from 'react'
import { Treemap } from 'react-vis'
import sortOn from 'sort-on'

export default ({ data }) => {
  if (!data.length) return null

  data = sortOn(data, '-size')

  const treeMapData = {
    title: '',
    children: data
  }

  return (
    <Treemap
      title={'Messages treemap'}
      height={ 650 }
      width={ 1400 }
      data={ treeMapData }
    />
  )
}
