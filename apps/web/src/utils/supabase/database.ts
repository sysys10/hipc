import { SupabaseClient } from '@supabase/supabase-js'

/**
 * @param table 테이블 이름
 * @returns 테이블 데이터
 */
const getDataFromTable = async <T>(supabase: SupabaseClient, table: string): Promise<T[]> => {
  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false })
  if (error) {
    throw error
  }
  return data as T[]
}

const getNoticeById = async (supabase: SupabaseClient, noticeId: string) => {
  const { data, error } = await supabase.from('notice').select('*').eq('noticeId', noticeId).single()

  if (error) throw error
  return data
}

/**
 * @param table 테이블 이름
 * @param insertData 데이터
 * @returns 데이터
 */
const insertDataToTable = async <T>(supabase: SupabaseClient, table: string, insertData: T) => {
  const { data, error } = await supabase.from(table).insert(insertData)
  if (error) {
    throw error
  }
  return data
}

/**
 * @param userId 유저 아이디
 * @returns 유저 이름
 */
const getUserNameByUserId = async (supabase: SupabaseClient, userId: string) => {
  const { data, error } = await supabase.from('user').select('user_name').eq('id', userId)
  if (error) {
    throw error
  }
  return data[0]?.user_name || 'user'
}

export { getDataFromTable, getNoticeById, insertDataToTable, getUserNameByUserId }
