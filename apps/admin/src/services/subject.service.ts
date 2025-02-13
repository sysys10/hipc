import { SubjectType } from '@/types/subject.type'

import { deleteDataFromTable } from '@packages/supabase/database/delete'
import { selectDataFromTable } from '@packages/supabase/database/select'
import { createClient } from '@packages/supabase/utils/client'

const fetchSubjects = async () => {
  const supabase = createClient()
  const data = await selectDataFromTable<SubjectType[]>(supabase, 'subjects')
  return data
}
const deleteSubject = async (id: string) => {
  const supabase = createClient()
  const data = await deleteDataFromTable(supabase, 'subjects', 'id', id)
  return data
}
export { fetchSubjects, deleteSubject }
