import React from 'react'
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'

interface Props {
  title: string
  description: string
  titleStyle?: StyleProp<TextStyle>
  descriptionStyle?: StyleProp<TextStyle>
}

const TextSection = ({
  title,
  description,
  titleStyle,
  descriptionStyle,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
      <Text style={{ ...styles.description, ...descriptionStyle }}>
        {description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#5E656E',
  },
})

export default TextSection
