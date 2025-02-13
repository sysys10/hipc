'use client'

import { useUserStore } from '@stores'
import { Session } from 'next-auth'
import { SessionProvider, useSession } from 'next-auth/react'
import { ReactNode, useEffect } from 'react'

type Props = {
  session?: Session | null
  children: ReactNode
}

// 세션 데이터를 Zustand store에 동기화하는 컴포넌트
function SessionSync() {
  const { data: session } = useSession()
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    if (session?.user) {
      setUser({
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
        profile_completed: session.user.profile_completed
      })
    }
  }, [session, setUser])

  return null
}

export function AuthProvider({ session, children }: Props) {
  return (
    <SessionProvider session={session}>
      <SessionSync />
      {children}
    </SessionProvider>
  )
}
