import { useState } from 'react'
import { useEffect } from 'react'

import { User } from '@types'

import { selectDataFromTable } from '@packages/supabase/database/select'
import { createClient } from '@packages/supabase/utils/client'

export function useUserList() {
  const [userList, setUserList] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setIsLoading(true)
        const supabase = createClient()
        const data = await selectDataFromTable<User[]>(supabase, 'User')
        if (data) {
          setUserList(data)
        }
      } catch (error) {
        console.error('Error fetching Users:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSubjects()
  }, [])

  return { userList, isLoading }
}
