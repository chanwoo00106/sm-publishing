import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const BottomButton = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.button}>저장</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  buttonWrapper: {
    margin: 16,
    paddingVertical: 12,
    backgroundColor: '#ff649a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  button: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
})

export default BottomButton
