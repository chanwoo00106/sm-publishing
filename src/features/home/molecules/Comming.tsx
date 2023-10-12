import { Close } from '@src/assets/svgs'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import { TextSection, ShadowSection } from '@src/features/home/atoms'

const Comming = () => {
  return (
    <ShadowSection style={styles.wrapper}>
      <WithLocalSvg asset={Close} style={styles.closeBtn} />
      <Image
        source={require('Todo/src/assets/images/IllustStick.png')}
        style={styles.illust}
      />
      <TextSection
        title='다가오는 공연이 있어요!'
        description='NCT NATION: To the World'
        titleStyle={styles.title}
      />
    </ShadowSection>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 16,
    position: 'relative',
  },
  title: {
    fontSize: 20,
  },
  illust: {
    width: 60,
    height: 60,
  },
  closeBtn: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 24,
    height: 24,
  },
})

export default Comming
