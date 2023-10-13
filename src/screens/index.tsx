import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from '@src/components'
import { MenuHeader } from '@src/features/menu'
import { RootStackParamList } from './type'

import HomeScreen from './HomeScreen'
import MenuScreen from './MenuScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const SCREENS = {
  home: 'Home',
  menu: 'Menu',
} as const

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.menu}>
        <Stack.Screen
          name={SCREENS.home}
          component={HomeScreen}
          options={{
            header: Header,
          }}
        />
        <Stack.Screen
          name={SCREENS.menu}
          component={MenuScreen}
          options={{
            header: MenuHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
