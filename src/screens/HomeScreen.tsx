import { MainTemplates } from '@src/features/home'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: insets.top + 60 }}
      style={styles.wrapper}
    >
      <MainTemplates />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
})

export default HomeScreen
