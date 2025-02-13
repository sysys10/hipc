import supabase from '@/utils/supabase/supabase'
import { NextResponse } from 'next/server'

import { NoticeType } from '@types'

import { getDataFromTable, getImageUrl } from '@utils'

export async function GET() {
  try {
    const notices = await getDataFromTable<NoticeType>(supabase(), 'notice')
    if (!notices) {
      return NextResponse.json({ error: '공지사항이 없습니다.' }, { status: 404 })
    }

    const noticesWithDetails = await Promise.all(
      notices.map(async (notice) => {
        console.log(notice)
        const [imageUrl, { data: userData }] = await Promise.all([
          getImageUrl(supabase(), 'image', notice.noticeId),
          supabase().from('user').select('user_name').eq('id', notice.author).single()
        ])

        return {
          ...notice,
          imageUrls: [imageUrl],
          userName: userData?.user_name || 'user'
        }
      })
    )

    return NextResponse.json(noticesWithDetails)
  } catch (error) {
    console.error('Error in notices API:', error)
    return NextResponse.json({ error: 'Failed to fetch notices' }, { status: 500 })
  }
}
export async function POST(request: Request) {
  const { title, content, author } = await request.json()
  const notice = await supabase().from('notice').insert({ title, content, author })
  return NextResponse.json(notice)
}
export async function DELETE(request: Request) {
  const { noticeId } = await request.json()
  const notice = await supabase().from('notice').delete().eq('noticeId', noticeId)
  return NextResponse.json(notice)
}
export async function PUT(request: Request) {
  const { noticeId, title, content } = await request.json()
  const notice = await supabase().from('notice').update({ title, content }).eq('noticeId', noticeId)
  return NextResponse.json(notice)
}
