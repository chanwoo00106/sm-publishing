import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Bell, Menu } from '@src/assets/svgs'
import { WithLocalSvg } from 'react-native-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useNavigate from '@src/hooks/useNavigate'
import { SCREENS } from '@src/constant'

const Header = () => {
  const insets = useSafeAreaInsets()
  const { navigate } = useNavigate()

  const MoveToMenu = () => navigate(SCREENS.menu)

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
        <TouchableOpacity onPress={MoveToMenu}>
          <WithLocalSvg width={32} height={32} asset={Menu} />
        </TouchableOpacity>
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
