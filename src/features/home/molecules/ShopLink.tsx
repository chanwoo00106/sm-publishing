import React from 'react'
import { StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TextSection, ShadowSection } from '@src/features/home/atoms'

const ShopLink = () => {
  return (
    <ShadowSection>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#ffebf2', '#ffffff']}
        style={styles.linearGradient}
      >
        <TextSection title='SHOP' description='온라인스토어 바로가기' />

        <Image
          source={require('Todo/src/assets/images/IllustShopping.png')}
          style={styles.image}
        />
      </LinearGradient>
    </ShadowSection>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
})

export default ShopLink
