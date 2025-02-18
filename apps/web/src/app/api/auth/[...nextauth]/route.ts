import supabaseClient from '@/utils/supabase/supabase'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const supabase = supabaseClient()
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'select_account',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false

      const { data: existingUser } = await supabase.from('user').select().eq('email', user.email).single()
      // 처음 가입 시
      if (!existingUser) {
        await supabase.from('user').insert([
          {
            email: user.email,
            name: user.name,
            google_id: user.id,
            profile_complete: false
          }
        ])
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        const { data: userData } = await supabase.from('user').select().eq('email', user.email).single()

        token.profile_complete = userData?.profile_complete
        token.id = userData?.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.profile_complete = token.profile_complete
        session.user.id = token.id as string
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }
