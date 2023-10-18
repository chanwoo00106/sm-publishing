import { Select } from '@src/assets/svgs'
import React from 'react'
import {
  ImageSourcePropType,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

interface Props {
  name: string
  backgroundColor: string
  logo: ImageSourcePropType
}

const ArtistCardActive = ({ name, backgroundColor, logo }: Props) => {
  return (
    <View style={[styles.wrapper, { backgroundColor: backgroundColor + 'cc' }]}>
      <WithLocalSvg
        style={styles.checkIcon}
        width={20}
        height={20}
        asset={Select}
      />
      <Image style={styles.logo} source={logo} />
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkIcon: {
    position: 'absolute',
    top: 8,
    right: 8.5,
  },
  logo: {
    width: 60,
    height: 60,
  },
  name: {
    paddingTop: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
})

export default ArtistCardActive
