import { createServerClient } from '@supabase/ssr'
import { SupabaseClient } from '@supabase/supabase-js'

export async function createClient(): Promise<SupabaseClient> {
  const cookies = require('next/headers').cookies()
  const cookieStore = await cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // `setAll` 메소드는 서버 컴포넌트에서 호출되었습니다.
          // 사용자의 세션을 새로 고치는 미들웨어가 있는 경우,
          // 이 부분은 무시할 수 있습니다.
        }
      }
    }
  })
}
