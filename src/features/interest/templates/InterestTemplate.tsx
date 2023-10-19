import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomButton from '../atoms/BottomButton'
import { ArtistList, Title } from '../organisms'

const InterestTemplate = () => {
  return (
    <View style={styles.wrapper}>
      <Title count={4} />
      <ArtistList />
      <BottomButton />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

export default InterestTemplate
