import React from 'react'
import { ArrowRight, ColorMegaphone } from '@src/assets/svgs'
import { StyleSheet, Text, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'

const Notice = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={['#ffcadc', '#ff84af']}
      style={styles.linearGradient}
    >
      <View style={styles.wrapper}>
        <WithLocalSvg asset={ColorMegaphone} style={styles.icon} />
        <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>
          새로운 버전이 출시되었어요! 업데이트 하러 가기 하면서 뭔갈 더 추가해서
          길이가 길어진다
        </Text>
        <WithLocalSvg asset={ArrowRight} style={styles.icon} />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 1,
    borderRadius: 16,
    flex: 1,
  },
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    flexShrink: 1,
  },
})

export default Notice
