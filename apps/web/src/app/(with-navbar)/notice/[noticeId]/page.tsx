import { NoticeDetail } from '@/components/ui/notice'
import { getNoticeById } from '@/utils/supabase/database'
import { getImageUrlsByNoticeId } from '@/utils/supabase/imageUpload'
import supabaseClient from '@/utils/supabase/supabase'
import { notFound } from 'next/navigation'

export default async function NoticePage({ params }: { params: Promise<{ noticeId: string }> }) {
  const supabase = supabaseClient()
  const { noticeId } = await params
  try {
    if (!noticeId) {
      return notFound()
    }
    const notice = await getNoticeById(supabase, noticeId)
    const imageUrls = await getImageUrlsByNoticeId(supabase, noticeId)

    if (!notice) {
      return notFound()
    }

    return <NoticeDetail notice={notice} imageUrls={imageUrls} />
  } catch (error) {
    console.error('Error fetching notice:', error)
    return notFound()
  }
}
