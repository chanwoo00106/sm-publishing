import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Bell, Menu } from '@src/assets/svgs'
import { WithLocalSvg } from 'react-native-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationState, useNavigation } from '@react-navigation/native'
import { SCREENS } from '@src/screens'

const Header = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        paddingTop: insets.top,
        ...styles.wrapper,
      }}
    >
      <View>
        <Image
          style={styles.logo}
          source={require('Todo/src/assets/images/logo.png')}
        />
      </View>
      <View style={styles.icons}>
        <WithLocalSvg width={32} height={32} asset={Bell} />
        <WithLocalSvg width={32} height={32} asset={Menu} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  icons: {
    flexDirection: 'row',
    gap: 12,
  },

  logo: {},
})

export default Header
