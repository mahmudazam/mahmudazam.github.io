
import { create } from 'zustand'

export interface MediaState {
  md: boolean,
  maxMd: boolean,
  setMd: (newMd: boolean) => void,
  setMaxMd: (newMaxMd: boolean) => void,
}

export const useMedia = create<MediaState>()((set) => ({
  md: false,
  maxMd: false,
  setMd: (newMd) => set((state : MediaState) => ({
    md: newMd
  })),
  setMaxMd: (newMaxMd) => set((state : MediaState) => ({
    maxMd: newMaxMd
  }))
}))
