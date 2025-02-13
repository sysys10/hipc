import { create } from 'zustand'

import { User } from '@types'

interface UserState {
  user: User | null
  setUser: (user: User) => void
  updateUser: (data: Partial<NonNullable<User>>) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : data
    })),
  clearUser: () => set({ user: null })
}))
