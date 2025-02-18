import { NoticeType } from '@types'

import { axiosInstance } from './axiosInstance'

export async function getNoticesWithDetails(): Promise<NoticeType[]> {
  const response = await axiosInstance.get('/api/notices')
  if (response.status !== 200) {
    throw new Error('공지사항 받기 실패')
  }

  return response.data
}
