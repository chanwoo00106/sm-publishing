import useNavigate from '@src/hooks/useNavigate'
import { interestArtistStore } from '@src/store'
import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const BottomButton = () => {
  const { pop } = useNavigate()
  const { saveArtists } = interestArtistStore()

  const onSave = () => {
    pop()
    saveArtists()
  }

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onSave} style={styles.buttonWrapper}>
        <Text style={styles.button}>저장</Text>
      </Pressable>
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
