import React from 'react'
import { Close } from '@src/assets/svgs'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useNavigate from '@src/hooks/useNavigate'
import { SCREENS } from '@src/constant'

const Header = () => {
  const insets = useSafeAreaInsets()
  const navigate = useNavigate()

  const MoveToHome = () => navigate(SCREENS.home)

  return (
    <View style={{ ...styles.wrapper, paddingTop: insets.top }}>
      <TouchableOpacity onPress={MoveToHome}>
        <WithLocalSvg width={32} height={32} asset={Close} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#F1F3F6',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

export default Header
