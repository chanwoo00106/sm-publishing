import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MenuSection } from '../atoms'
import SettingList from '../data/SettingList'
import { Column } from '../molecules'
import { Footer, Interest, Profile } from '../organisms'

const MenuTemplate = () => {
  return (
    <View>
      <Profile username='변찬우' email='chan1234@naver.com' />
      <View style={styles.menus}>
        <Interest />

        {SettingList.map((i) => (
          <MenuSection key={i.name} label={i.name}>
            {i.content.map((j) => (
              <Column
                key={j.name}
                label={j.name}
                iconLabel={j.iconLabel}
                badge={j.badge}
              />
            ))}
          </MenuSection>
        ))}

        <Footer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menus: {
    gap: 20,
  },
})

export default MenuTemplate
