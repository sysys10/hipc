import { create } from 'zustand'

import { User } from '@types'

interface UserState {
  user: User | null
  setUser: (user: User) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  updateUser: (data: Partial<NonNullable<User>>) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : data
    })),
  clearUser: () => set({ user: null })
}))
