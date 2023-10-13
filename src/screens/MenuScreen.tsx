import { MenuTemplate } from '@src/features/menu'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const MenuScreen = () => {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.containerStyle}
    >
      <MenuTemplate />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F1F3F6',
    paddingHorizontal: 16,
  },
  containerStyle: {
    paddingBottom: 60,
  },
})

export default MenuScreen
