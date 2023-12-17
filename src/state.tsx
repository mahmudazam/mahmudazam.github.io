
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
  setMd: (newMd) => set((state : MediaState) => ({ md: newMd })),
  setMaxMd: (newMaxMd) => set((state : MediaState) => ({ maxMd: newMaxMd }))
}))

export interface NavState {
  showNav: boolean,
  collapseNavDelay: boolean,
  setShowNav: (newValue: boolean) => void,
  setCollapseNavDelay: (newValue: boolean) => void,
  collapseNavNow: () => void,
}

export const useNavState = create<NavState>()((set) => ({
  showNav: false,
  collapseNavDelay: false,
  setShowNav: newValue =>
    set(state => ({ showNav: newValue })),
  setCollapseNavDelay: newValue =>
    set(state => ({ collapseNavDelay: newValue })),
  collapseNavNow: () =>
    set(state => ({
      showNav: false,
      collapseNavDelay: false
    })),
}))

