import { GradeCategoriesType } from '@/types'
import { SubjectType } from '@/types'

const filterSubject = (
  subjects: SubjectType[],
  category: GradeCategoriesType
) => {
  if (category === '전체') return subjects
  return subjects?.filter((subject) => {
    return subject.grade.includes(category as GradeCategoriesType)
  })
}



export { filterSubject }
