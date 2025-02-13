'use client'

import { useUserStore } from '@stores'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function CompleteProfile() {
  const router = useRouter()
  const user = useUserStore((state) => state.user)
  const [formData, setFormData] = useState({
    department: '',
    studentId: '',
    phoneNumber: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase
      .from('users')
      .update({
        ...formData,
        profile_complete: true
      })
      .eq('email', user?.email)

    if (!error) {
      await supabase.auth.updateUser({
        data: {
          profile_complete: true
        }
      })
      router.push('/')
    }
  }

  return (
    <div className='max-w-md mx-auto mt-8 p-6'>
      <h1 className='text-2xl font-bold mb-6'>프로필 완성하기</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-1'>학과</label>
          <input
            type='text'
            value={formData.department}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                department: e.target.value
              }))
            }
            className='w-full p-2 border rounded-md'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>학번</label>
          <input
            type='text'
            value={formData.studentId}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                studentId: e.target.value
              }))
            }
            className='w-full p-2 border rounded-md'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>전화번호</label>
          <input
            type='tel'
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: e.target.value
              }))
            }
            className='w-full p-2 border rounded-md'
            required
          />
        </div>

        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md'>
          저장하기
        </button>
      </form>
    </div>
  )
}
