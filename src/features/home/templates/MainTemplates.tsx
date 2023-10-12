import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Notice,
  ShopLink,
  Comming,
  Advertisement,
} from '@src/features/home/molecules'
import { BottomSections } from '@src/features/home/organisms'

const MainTemplates = () => {
  return (
    <View style={styles.wrapper}>
      <Advertisement />
      <Notice />
      <Comming />
      <ShopLink />
      <BottomSections />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
    flex: 1,
  },
})

export default MainTemplates
