import { NoticeDetail } from '@/components'

export default async function NoticePage({ params }: { params: Promise<{ noticeId: string }> }) {
  const { noticeId } = await params

  return <NoticeDetail noticeId={noticeId} />
}
