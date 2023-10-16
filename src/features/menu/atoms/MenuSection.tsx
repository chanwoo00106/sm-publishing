import React, { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  label?: string
  children?: ReactNode | ReactNode[]
}

const MenuSection = ({ label, children }: Props) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    marginBottom: 4,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 4,
  },
  label: {
    color: '#8c939a',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
})

export default MenuSection
