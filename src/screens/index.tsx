import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from '@src/components'
import { MenuHeader } from '@src/features/menu'
import { RootStackParamList } from './type'
import { SCREENS } from '@src/constant'
import { InterestRightHeader } from '@src/features/interest'

import HomeScreen from './HomeScreen'
import MenuScreen from './MenuScreen'
import InterestScreen from './InterestScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.home}>
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
        <Stack.Screen
          name={SCREENS.interest}
          component={InterestScreen}
          options={{
            headerTitle: '관심 아티스트',
            headerRight: InterestRightHeader,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
