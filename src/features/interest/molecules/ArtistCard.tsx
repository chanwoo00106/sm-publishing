import { ArtistsType } from '@src/constant'
import { interestArtistStore } from '@src/store'
import React, { useState } from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native'
import { ArtistCardActive, ArtistCardDefault } from '../atoms'

interface Props {
  image: ImageSourcePropType
  name: ArtistsType
  backgroundColor: string
  checked: boolean
  logo: ImageSourcePropType
  label: string
}

const ArtistCard = ({
  image,
  name,
  backgroundColor,
  logo,
  checked,
  label,
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)
  const { addArtist, removeArtist } = interestArtistStore()

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
            name={label}
          />
        ) : (
          <ArtistCardDefault name={label} />
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
