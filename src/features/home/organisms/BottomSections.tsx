import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomBigSection, BottomSmallSection } from '../molecules'

const BottomSections = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <BottomBigSection
          title='SCHEDULE'
          description={'아티스트 일정\n확인하기'}
          image={require('Todo/src/assets/images/IllustCalendar.png')}
        />
        <BottomBigSection
          title='AR VIEWER'
          description={'스페셜 콘텐츠\n보기'}
          image={require('Todo/src/assets/images/IllustScan.png')}
        />
      </View>
      <View style={styles.section}>
        <BottomSmallSection
          title='LIGHT STICK'
          description={'응원봉 연동하기'}
          image={require('Todo/src/assets/images/Stick.png')}
        />
        <BottomSmallSection
          title='PASSPORT'
          description={'스탬프 모으기'}
          image={require('Todo/src/assets/images/IllustPassportStamp.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 12,
  },
  section: {
    gap: 12,
    flexDirection: 'row',
  },
})

export default BottomSections
