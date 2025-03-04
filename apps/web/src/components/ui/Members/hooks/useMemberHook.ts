import supabaseClient from '@/utils/supabase/supabase'
import { useEffect, useState } from 'react'

import { MemberType } from '../type'

const useMemberHook = () => {
  const [ranking, setRanking] = useState<MemberType[]>([])

  useEffect(() => {
    const fetchRanking = async () => {
      const supabase = await supabaseClient()
      const { data, error } = await supabase.from('study_users').select('*').order('boj_tier', { ascending: false })
      if (error) {
        console.error(error)
      } else {
        setRanking(data)
      }
    }
    fetchRanking()
  }, [])

  return { ranking }
}

export default useMemberHook
