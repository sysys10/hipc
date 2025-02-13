type GradeCategoriesType =
  | '전체'
  | '1학년'
  | '2학년'
  | '3학년'
  | '4학년'
  | '5학년'
  | '6학년'

interface SubjectType {
  id: string
  title: string
  imageUrl?: string
  imgSrc: string
  grade: GradeCategoriesType[]
  class: string[]
  theme: string[]
  syllabus: string | null
}

interface FormData {
  title: string
  grade: GradeCategoriesType[]
  image: File | null
  class: string[]
  theme: string[]
  syllabus: string
}

export type { FormData, GradeCategoriesType, SubjectType }
