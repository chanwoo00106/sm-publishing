import { Dots, Plus } from '@src/assets/svgs'
import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import { ArtistsType, ARTISTS_IMAGE, SCREENS } from '@src/constant'
import useNavigate from '@src/hooks/useNavigate'

interface Props {
  artists?: ArtistsType[]
}

const Interest = ({ artists }: Props) => {
  const navigate = useNavigate()

  const moveToInterest = () => navigate(SCREENS.interest)

  if (!artists) {
    return (
      <Pressable onPress={moveToInterest} style={styles.wrapper}>
        <Text style={styles.text}>관심 아티스트 설정하기</Text>

        <View style={styles.circle}>
          <WithLocalSvg width={24} height={24} asset={Plus} />
        </View>
      </Pressable>
    )
  }

  return (
    <Pressable onPress={moveToInterest} style={styles.wrapper}>
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
    </Pressable>
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
