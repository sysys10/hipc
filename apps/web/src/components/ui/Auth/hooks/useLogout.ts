import { useUserStore } from '@/stores'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser)
  const router = useRouter()
  const handleLogout = async () => {
    await signOut({ redirect: false })
    clearUser()
    router.back()
  }
  return { handleLogout }
}
