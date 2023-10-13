import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ColumnRightIcon } from '@src/features/menu/atoms'

interface Props {
  label: string
  iconLabel?: string
  badge?: string
}

const Column = ({ label, badge, iconLabel }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>{label}</Text>

      <ColumnRightIcon badge={badge} label={iconLabel} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default Column
