import React, { useState } from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  image: ImageSourcePropType
  name: string
  backgroundColor: string
  checked: boolean
  logo: ImageSourcePropType
}

const ArtistCard = ({ image, name, backgroundColor, logo, checked }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const onPress = () => {
    setIsChecked((prev) => !prev)
  }

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      {isChecked && (
        <View
          style={[
            styles.background,
            { backgroundColor: backgroundColor + 'cc' },
          ]}
        >
          <Image style={styles.backgroundImage} source={logo} />
          <Text style={styles.backgroundText}>{name}</Text>
        </View>
      )}

      <ImageBackground source={image} style={styles.image}>
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.linearGradient}
        >
          {!isChecked && <Text style={styles.name}>{name}</Text>}
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: 60,
    height: 60,
  },
  backgroundText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#fff',
    paddingTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  image: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'contain',
    aspectRatio: 331 / 230,
  },
  linearGradient: {
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#fff',
    paddingVertical: 8,
    zIndex: 5,
  },
})

export default ArtistCard
