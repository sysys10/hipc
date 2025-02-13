interface NoticeType {
  noticeId: string
  userName: string
  title: string
  content: string
  isImportant: boolean
  author: string
  viewCount?: number
  likeCount?: number
  imageUrls?: string[]
  created_at: string
  updated_at: string
}

export type { NoticeType }
