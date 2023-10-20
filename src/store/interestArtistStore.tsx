import { ArtistsType } from '@src/constant'
import { create } from 'zustand'

interface InterestArtistStoreType {
  artistCheckList: ArtistsType[]
  interestArtist: ArtistsType[]
  addArtist: (artist: ArtistsType) => void
  removeArtist: (artist: ArtistsType) => void
  saveArtists: () => void
  clearCheckList: () => void
}

const interestArtistStore = create<InterestArtistStoreType>((set) => ({
  artistCheckList: [],
  interestArtist: [],
  saveArtists: () =>
    set((state) => ({
      interestArtist: [...state.artistCheckList],
    })),
  addArtist: (artist) =>
    set((state) => ({
      artistCheckList: [...state.artistCheckList, artist],
    })),
  removeArtist: (artist) =>
    set((state) => ({
      artistCheckList: state.artistCheckList.filter((i) => i !== artist),
    })),
  clearCheckList: () =>
    set((state) => ({
      artistCheckList: [...state.interestArtist],
    })),
}))

export default interestArtistStore
