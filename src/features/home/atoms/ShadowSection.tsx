import React from 'react'
import { StyleSheet } from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

interface Props extends ViewProps {}

const ShadowSection = ({ children, ...props }: Props) => {
  return (
    <DropShadow {...props} style={[props.style, styles.dropShadow]}>
      {children}
    </DropShadow>
  )
}

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: '#a17891',
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 16,
  },
})

export default ShadowSection
