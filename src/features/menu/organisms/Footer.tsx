import { KWANGYA119 } from '@src/assets/svgs'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

const Footer = () => {
  return (
    <View style={styles.wrapper}>
      <WithLocalSvg asset={KWANGYA119} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
  },
})

export default Footer
