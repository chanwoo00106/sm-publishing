import { ArrowRight } from '@src/assets/svgs'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

interface Props {
  label?: string
  badge?: string
}

const ColumnRightIcon = ({ label, badge }: Props) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      {badge && (
        <View style={styles.badgeWrap}>
          <Text style={styles.badge}>{badge}</Text>
        </View>
      )}
      <WithLocalSvg width={32} height={32} asset={ArrowRight} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    color: '#8c939a',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
  },
  badgeWrap: {
    backgroundColor: '#f1f3f6',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  badge: {
    color: '#222529',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
  },
})

export default ColumnRightIcon
