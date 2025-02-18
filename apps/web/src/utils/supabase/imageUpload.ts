import { SupabaseClient } from '@supabase/supabase-js'

/**
 * @param storageName 스토리지 이름
 * @param imgSrc 이미지 이름
 * @returns 이미지 주소
 */
const getImageUrl = async (supabase: SupabaseClient, storageName: string, noticeId: string): Promise<string> => {
  const { data } = await supabase.storage.from(storageName).getPublicUrl(`notice/${noticeId}/1.png`)
  return data.publicUrl
}

const getImageUrlsByNoticeId = async (supabase: SupabaseClient, noticeId: string) => {
  const { data } = await supabase.storage.from('image').list(`notice/${noticeId}/`)
  return data?.map((item) => item.name) || []
}

/**
 * @param storageName 스토리지 이름
 * @param imgSrc 이미지 이름
 * @returns 이미지 주소
 */
const uploadImage = async (supabase: SupabaseClient, storageName: string, noticeId: string, file: File) => {
  const { data, error } = await supabase.storage.from(storageName).upload(`/notice/${noticeId}/${file.name}`, file)
  if (error) {
    throw error
  }
  return data
}

export { getImageUrl, uploadImage, getImageUrlsByNoticeId }
