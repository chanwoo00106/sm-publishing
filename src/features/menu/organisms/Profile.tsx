import { Person } from '@src/assets/svgs'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

const Profile = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.usernameWrap}>
        <Text style={styles.username}>로그인</Text>
        <WithLocalSvg width={32} height={32} asset={Person} />
      </View>

      <Text style={styles.email}>로그인하고 모든 서비스를 이용해보세요.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 4,
    marginBottom: 12,
  },
  usernameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  username: {
    color: '#acb3ba',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
  email: {
    color: '#acb3ba',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
})

export default Profile
