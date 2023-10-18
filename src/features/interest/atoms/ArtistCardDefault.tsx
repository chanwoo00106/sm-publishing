import React from 'react'
import { StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  name: string
}

const ArtistCardDefault = ({ name }: Props) => {
  return (
    <LinearGradient
      colors={['transparent', '#000']}
      style={styles.linearGradient}
    >
      <Text style={styles.name}>{name}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#fff',
    paddingVertical: 8,
    zIndex: 5,
  },
})

export default ArtistCardDefault
