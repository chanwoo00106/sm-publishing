import { Plus } from '@src/assets/svgs'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

const Interest = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>관심 아티스트 설정하기</Text>

      <View style={styles.circle}>
        <WithLocalSvg width={24} height={24} asset={Plus} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#8C939A',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8FB',
  },
})

export default Interest
