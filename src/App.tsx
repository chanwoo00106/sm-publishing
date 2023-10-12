import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Screens from './screens'

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Screens />
    </SafeAreaProvider>
  )
}

export default App
