import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  count?: number
}

const Title = ({ count }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{'내 관심 아티스트 '}</Text>
      <Text style={styles.count}>{count || '0'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
  },
  count: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    color: '#ff649a',
  },
})

export default Title
