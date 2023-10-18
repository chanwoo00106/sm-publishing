import React, { useState } from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native'
import { ArtistCardActive, ArtistCardDefault } from '../atoms'
import { artistCheckListStore } from '../store'

interface Props {
  image: ImageSourcePropType
  name: string
  backgroundColor: string
  checked: boolean
  logo: ImageSourcePropType
}

const ArtistCard = ({ image, name, backgroundColor, logo, checked }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)
  const { addArtist, removeArtist } = artistCheckListStore()

  const onPress = () => {
    if (isChecked) {
      removeArtist(name)
    } else {
      addArtist(name)
    }
    setIsChecked((prev) => !prev)
  }

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ImageBackground source={image} style={styles.image}>
        {isChecked ? (
          <ArtistCardActive
            backgroundColor={backgroundColor}
            logo={logo}
            name={name}
          />
        ) : (
          <ArtistCardDefault name={name} />
        )}
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'contain',
    aspectRatio: 331 / 230,
  },
})

export default ArtistCard
