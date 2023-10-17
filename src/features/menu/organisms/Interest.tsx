import { Dots, Plus } from '@src/assets/svgs'
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import { ArtistsType, ARTISTS_IMAGE } from '@src/constant'

interface Props {
  artists?: ArtistsType[]
}

const Interest = ({ artists }: Props) => {
  if (!artists) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>관심 아티스트 설정하기</Text>

        <View style={styles.circle}>
          <WithLocalSvg width={24} height={24} asset={Plus} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.text, color: '#222529' }}>내 관심 아티스트</Text>

      <View style={{ ...styles.list, gap: artists.length >= 3 ? 0 : 4 }}>
        {artists.slice(0, 3).map((artist, idx) => (
          <Image
            key={idx}
            source={ARTISTS_IMAGE[artist]}
            style={styles.artistImage}
          />
        ))}

        {artists.length >= 4 && (
          <View style={styles.circle}>
            <WithLocalSvg width={24} height={24} asset={Dots} />
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#8C939A',
  },
  list: {
    flexDirection: 'row',
  },
  artistImage: {
    width: 38,
    height: 38,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8FB',
  },
})

export default Interest
