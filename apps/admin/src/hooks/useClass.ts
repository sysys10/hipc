import { deleteSubject } from '@/services/subject.service'
import { useCallback, useEffect, useRef, useState } from 'react'

import { GradeCategoriesType, SubjectType } from '@types'

import { filterSubject } from '@utils'

import { selectDataFromTable } from '@packages/supabase/database/select'
import { createClient } from '@packages/supabase/utils/client'

function useSubjects() {
  const subjectRef = useRef<SubjectType[]>([])
  const [filteredSubjects, setFilteredSubjects] = useState<SubjectType[]>([])
  const [category, setCategory] = useState<GradeCategoriesType>('전체')
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()
  const handleFilterSubject = useCallback(
    (category: GradeCategoriesType) => {
      setCategory(category)
      const filtered = filterSubject(subjectRef.current, category)
      setFilteredSubjects(filtered)
    },
    [subjectRef]
  )
  const handleSearchSubject = useCallback(
    (search: string) => {
      const filtered = subjectRef.current.filter((subject) =>
        subject.title.includes(search)
      )
      setFilteredSubjects(filtered)
    },
    [subjectRef]
  )

  const handleDeleteSubject = async (id: string) => {
    const data = await deleteSubject(id)
    handleFetchSubjects()
    return data
  }

  const handleFetchSubjects = async () => {
    try {
      setIsLoading(true)
      const data = await selectDataFromTable<SubjectType[]>(
        supabase,
        'subjects'
      )
      setFilteredSubjects(data)
    } catch (error) {
      console.error('Error fetching subjects:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    handleFetchSubjects()
  }, [])

  return {
    handleSearchSubject,
    filteredSubjects,
    handleDeleteSubject,
    category,
    setCategory,
    handleFilterSubject,
    isLoading
  }
}

export { useSubjects }
