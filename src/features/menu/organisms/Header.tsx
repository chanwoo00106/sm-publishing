import React from 'react'
import { Close } from '@src/assets/svgs'
import { StyleSheet, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Header = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ ...styles.wrapper, paddingTop: insets.top }}>
      <WithLocalSvg width={32} height={32} asset={Close} />
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
