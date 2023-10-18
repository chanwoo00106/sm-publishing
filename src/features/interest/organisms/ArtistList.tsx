import React from 'react'
import { FlatList } from 'react-native'
import { ArtistCard } from '../molecules'
import KANGTA_IMAGE from '@src/assets/images/KANGTA_IMAGE.png'
import { ArtistsType, ARTISTS_IMAGE } from '@src/constant'
import { artistCheckListStore } from '../store'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const data: {
  image: any
  label: string
  name: ArtistsType
  backgroundColor: string
  logo: any
}[] = [
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA',
    label: 'KANGTA',
    backgroundColor: '#f4cd00',
    logo: ARTISTS_IMAGE.KANGTA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'BoA',
    label: 'BoA',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'TVXQ',
    label: 'TVXQ',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.TVXQ,
  },
  {
    image: KANGTA_IMAGE,
    name: 'SUPER_JUNIOR',
    label: 'SUPER JUNIOR',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.SUPER_JUNIOR,
  },
  {
    image: KANGTA_IMAGE,
    name: 'SNSD',
    label: "GIRLS' GENERATION",
    backgroundColor: '#f27996',
    logo: ARTISTS_IMAGE.GOT,
  },
  {
    image: KANGTA_IMAGE,
    name: 'SHINEE',
    label: 'SHINee',
    backgroundColor: '#6ccdda',
    logo: ARTISTS_IMAGE.SHINEE,
  },
  {
    image: KANGTA_IMAGE,
    name: 'EXO',
    label: 'EXO',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.EXO,
  },
  {
    image: KANGTA_IMAGE,
    name: 'RedVelvet',
    label: 'Red Velvet',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.RedVelvet,
  },
  {
    image: KANGTA_IMAGE,
    name: 'NCT127',
    label: 'NCT 127',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.NCT127,
  },
  {
    image: KANGTA_IMAGE,
    name: 'NCT_DREAM',
    label: 'NCT DREAM',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.NCT_DREAM,
  },
  {
    image: KANGTA_IMAGE,
    name: 'WayV',
    label: 'WayV',
    backgroundColor: '#ffffff',
    logo: ARTISTS_IMAGE.WayV,
  },
  {
    image: KANGTA_IMAGE,
    name: 'Aespa',
    label: 'aespa',
    backgroundColor: '#da94ee',
    logo: ARTISTS_IMAGE.Aespa,
  },
]

const ArtistList = () => {
  const { artistCheckList } = artistCheckListStore()
  const insets = useSafeAreaInsets()

  return (
    <FlatList
      numColumns={2}
      data={data}
      style={{ paddingBottom: insets.top }}
      contentContainerStyle={{ gap: 12 }}
      columnWrapperStyle={{ gap: 12 }}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <ArtistCard
          key={index}
          {...item}
          checked={!!artistCheckList.find((i) => i === item.name)}
        />
      )}
    />
  )
}

export default ArtistList
