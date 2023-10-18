import { create } from 'zustand'

interface ArtistCheckList {
  artistCheckList: string[]
  addArtist: (artist: string) => void
  removeArtist: (artist: string) => void
}

export const artistCheckListStore = create<ArtistCheckList>((set) => ({
  artistCheckList: ['KANGTA'],
  addArtist: (artist) =>
    set((state) => ({
      artistCheckList: [...state.artistCheckList, artist],
    })),
  removeArtist: (artist) =>
    set((state) => ({
      artistCheckList: state.artistCheckList.filter((i) => i === artist),
    })),
}))
