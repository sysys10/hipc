import supabaseClient from '@/utils/supabase/supabase'
import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await supabaseClient()
    const { data, error } = await supabase.from('study_users').select('*')
    if (error) {
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 })
    }
    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0]
    data?.forEach(async (user) => {
      const { data } = await axios.get(`https://solved.ac/api/v3/user/show?handle=${user.boj_handle}`)

      const isExist = await supabase.from('solved_problems_daily').select('*').eq('boj_handle', data.handle).single()

      await supabase.from('solved_problems_daily').insert({
        boj_handle: data.handle,
        solved_cnt: data.solvedCount,
        rating: data.rating,
        user_id: user.user_id,
        date: formattedDate
      })

      if (isExist.data) {
        if (data.solvedCount <= user.solved_cnt) {
          await supabase
            .from('study_users')
            .update({
              fine: user.fine + 1000
            })
            .eq('user_id', user.user_id)
        }
      }
      await supabase
        .from('study_users')
        .update({
          solved_cnt: data.solvedCount,
          boj_tier: data.tier
        })
        .eq('user_id', user.user_id)
    })

    return NextResponse.json({ message: 'User data fetched successfully', data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to schedule refresh' + (error as Error).message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const { boj_handle } = await request.json()
  const { data } = await axios.get(`https://solved.ac/api/v3/user/show?handle=${boj_handle}`)
  return NextResponse.json({ message: 'Hello, World!', data })
}
