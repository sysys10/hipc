'use client'

import { useUserStore } from '@/stores'
import supabaseClient from '@/utils/supabase/supabase'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@packages/ui/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@packages/ui/components/card'
import { Input } from '@packages/ui/components/input'
import { Label } from '@packages/ui/components/label'

import CrawlingModal from './CrawlingModal'

export function AssignStudy({ id, name }: { id: string; name: string }) {
  const [formData, setFormData] = useState({
    baekjoonHandle: '',
    nickname: '',
    studentId: '',
    realName: ''
  })
  const router = useRouter()

  const { user } = useUserStore()

  useEffect(() => {
    let isSubscribed = true
    const timeoutId = setTimeout(() => {
      async function fetchStudy() {
        try {
          const supabase = await supabaseClient()
          const { data } = await supabase.from('study_users').select('*').eq('study_id', id).eq('user_id', user?.id).single()

          if (data && isSubscribed) {
            router.push('/study')
            toast.info('이미 스터디에 참여하셨습니다.')
          }
        } catch (error) {
          console.error('Error fetching study:', error)
        }
      }
      fetchStudy()
    }, 100) // 짧은 지연 추가

    return () => {
      isSubscribed = false
      clearTimeout(timeoutId)
    }
  }, [user?.id, id, router])

  const [isCrolling, setIsCrolling] = useState(false)
  const [crollData, setCrollData] = useState<any>(null)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setIsCrolling(true)
      const supabase = await supabaseClient()
      const { data: crollData } = await axios.post('/api/croll', {
        boj_handle: formData.baekjoonHandle
      })
      const { error } = await supabase.from('study_users').insert({
        study_id: id,
        user_id: user?.id,
        boj_handle: formData.baekjoonHandle,
        nickname: formData.nickname,
        student_id: formData.studentId,
        real_name: formData.realName,
        boj_tier: crollData.data.tier,
        solved_cnt: crollData.data.solvedCount
      })
      await supabase.rpc('increment_member_count', { study_id: id })

      if (error) {
        console.error(error)
        return
      }
      setCrollData({
        ...crollData.data
      })
      toast.success('스터디 신청이 완료되었습니다.')
    } catch (error) {
      toast.error((error as Error).message)
      console.error(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className='w-full h-screen bg-gray-50'>
      <CrawlingModal
        isOpen={isCrolling}
        handleClose={() => {
          setIsCrolling(false)
          router.push('/study')
        }}
        crollData={crollData}
      />
      <Card className='w-full h-full border-0 rounded-none'>
        <CardHeader className='max-w-5xl mx-auto w-full pt-16 pb-8'>
          <CardTitle className='text-4xl font-bold text-center'>{name} 참여하기</CardTitle>
          <CardDescription className='text-lg text-center mt-4'>스터디 참여를 위해 아래 정보를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent className='max-w-3xl mx-auto w-full'>
          <form onSubmit={handleSubmit} className='space-y-8'>
            <div className='space-y-2'>
              <Label htmlFor='baekjoonHandle' className='text-lg font-medium'>
                백준 핸들
              </Label>
              <Input
                id='baekjoonHandle'
                name='baekjoonHandle'
                placeholder='백준 아이디를 입력하세요'
                value={formData.baekjoonHandle}
                onChange={handleChange}
                required
                className='h-12 text-lg'
              />
              {formData.baekjoonHandle && (
                <div className='flex flex-col w-full md:flex-row gap-x-2 items-start md:items-end'>
                  <Link target='_blank' className='text-blue-500' href={`https://solved.ac/profile/${formData.baekjoonHandle}`}>
                    https://solved.ac/profile/{formData.baekjoonHandle}
                  </Link>
                  <p className='text-sm text-gray-500'>solved.ac에 가입되어있어야합니다.</p>
                </div>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='nickname' className='text-lg font-medium'>
                닉네임
              </Label>
              <Input id='nickname' name='nickname' placeholder='사용하실 닉네임을 입력하세요' value={formData.nickname} onChange={handleChange} required className='h-12 text-lg' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='studentId' className='text-lg font-medium'>
                학번
              </Label>
              <Input id='studentId' name='studentId' placeholder='학번을 입력하세요' value={formData.studentId} onChange={handleChange} required className='h-12 text-lg' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='realName' className='text-lg font-medium'>
                본명
              </Label>
              <Input id='realName' name='realName' placeholder='본명을 입력하세요' value={formData.realName} onChange={handleChange} required className='h-12 text-lg' />
            </div>

            <Button type='submit' className='w-full h-12 text-lg font-medium mt-8'>
              제출하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
