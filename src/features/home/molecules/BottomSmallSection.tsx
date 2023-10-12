import React from 'react'
import { ShadowSection, TextSection } from '@src/features/home/atoms'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'

interface Props {
  title: string
  description: string
  image: ImageSourcePropType
}

const BottomSmallSection = ({ title, description, image }: Props) => {
  return (
    <ShadowSection style={styles.wrapper}>
      <TextSection title={title} description={description} />
      <View style={styles.illustPosition}>
        <Image source={image} style={styles.illust} />
      </View>
    </ShadowSection>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    flex: 1,
  },
  illustPosition: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  illust: {
    width: 48,
    height: 48,
  },
})

export default BottomSmallSection
