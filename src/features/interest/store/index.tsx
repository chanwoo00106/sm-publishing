import { ArtistsType } from '@src/constant'
import { create } from 'zustand'

interface ArtistCheckList {
  artistCheckList: ArtistsType[]
  addArtist: (artist: ArtistsType) => void
  removeArtist: (artist: ArtistsType) => void
}

export const artistCheckListStore = create<ArtistCheckList>((set) => ({
  artistCheckList: ['KANGTA'],
  addArtist: (artist) =>
    set((state) => ({
      artistCheckList: [...state.artistCheckList, artist],
    })),
  removeArtist: (artist) =>
    set((state) => ({
      artistCheckList: state.artistCheckList.filter((i) => i !== artist),
    })),
}))
