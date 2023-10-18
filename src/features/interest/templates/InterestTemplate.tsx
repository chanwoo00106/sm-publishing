import React from 'react'
import { View } from 'react-native'
import { ArtistList, Title } from '../organisms'

const InterestTemplate = () => {
  return (
    <View>
      <Title count={4} />
      <ArtistList />
    </View>
  )
}

export default InterestTemplate
