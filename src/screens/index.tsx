import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import { Header } from '@src/components'

const Stack = createNativeStackNavigator()

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: Header,
          headerBackVisible: true,
        }}
      >
        <Stack.Screen name='home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
