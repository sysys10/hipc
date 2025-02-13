import { FormData } from '@/types'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { insertDataToTable } from '@packages/supabase/database/insert'
import { uploadImage } from '@packages/supabase/storage/upload'
import { createClient } from '@packages/supabase/utils/client'

export function useSubjectForm() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    grade: [],
    image: null,
    class: [''],
    theme: [''],
    syllabus: ''
  })

  const [isSubmitLoading, setIsSubmitLoading] = useState(false)

  const handleFormChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (
    field: 'class' | 'theme',
    value: string,
    index: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item))
    }))
  }

  const handleArrayAdd = (field: 'class' | 'theme') => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFormChange('image', e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitLoading(true)

    try {
      const supabase = createClient()
      let imgSrc = ''
      if (formData.image) {
        imgSrc = await uploadImage(supabase, formData.image)
      }

      await insertDataToTable(supabase, 'subjects', {
        title: formData.title,
        imgSrc,
        grade: formData.grade,
        class: formData.class,
        theme: formData.theme,
        syllabus: formData.syllabus
      })
      toast.success('과목 생성 완료')
    } catch (error) {
      console.error(error)
      toast.error('과목 생성 실패')
    } finally {
      setIsSubmitLoading(false)
    }
  }

  return {
    formData,
    handleFormChange,
    isSubmitLoading,
    handleArrayChange,
    handleArrayAdd,
    handleImageChange,
    handleSubmit
  }
}
