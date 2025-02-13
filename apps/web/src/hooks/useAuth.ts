import { useUserStore } from '@/stores/useUserStore'

export const useAuth = () => {
  const user = useUserStore((state) => state.user)

  return user
}
