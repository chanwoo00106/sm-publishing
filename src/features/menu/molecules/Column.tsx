import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ColumnRightIcon } from '@src/features/menu/atoms'

interface Props {
  label: string
  iconLabel?: string
  badge?: string
}

const Column = ({ label, badge, iconLabel }: Props) => {
  return (
    <Pressable style={({ pressed }) => (pressed ? styles.onPress : undefined)}>
      <View style={styles.wrapper}>
        <Text>{label}</Text>

        <ColumnRightIcon badge={badge} label={iconLabel} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onPress: {
    backgroundColor: '#f6f8fb',
    borderRadius: 12,
  },
})

export default Column
