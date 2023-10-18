import React from 'react'
import { FlatList } from 'react-native'
import { ArtistCard } from '../molecules'
import KANGTA_IMAGE from '@src/assets/images/KANGTA_IMAGE.png'
import { ARTISTS_IMAGE } from '@src/constant'

const data = [
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA',
    backgroundColor: '#f4cd00',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA1',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA2',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA3',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA4',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA5',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA6',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA7',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA8',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
  {
    image: KANGTA_IMAGE,
    name: 'KANGTA9',
    backgroundColor: '#ffffff',
    checked: false,
    logo: ARTISTS_IMAGE.BoA,
  },
]

const ArtistList = () => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      contentContainerStyle={{ gap: 12 }}
      columnWrapperStyle={{ gap: 12 }}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => <ArtistCard key={index} {...item} />}
    />
  )
}

export default ArtistList
