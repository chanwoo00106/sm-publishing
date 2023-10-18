import { InterestTemplate } from '@src/features/interest'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const InterestScreen = () => {
  return (
    <View style={styles.wrapper}>
      <InterestTemplate />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
})

export default InterestScreen
