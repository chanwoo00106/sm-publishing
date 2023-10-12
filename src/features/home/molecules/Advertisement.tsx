import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Advertisement = () => {
  return (
    <Image
      style={styles.image}
      source={require('Todo/src/assets/images/advertisement.png')}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 24,
    height: 88,
  },
})

export default Advertisement
