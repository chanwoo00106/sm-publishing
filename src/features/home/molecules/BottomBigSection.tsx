import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import { TextSection, ShadowSection } from '@src/features/home/atoms'

interface Props {
  title: string
  description: string
  image: ImageSourcePropType
}

const BttomBigSection = ({ description, title, image }: Props) => {
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
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    borderRadius: 16,
    gap: 10,
    flex: 1,
  },
  illustPosition: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  illust: {
    width: 64,
    height: 64,
  },
})

export default BttomBigSection
