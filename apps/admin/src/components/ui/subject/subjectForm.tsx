'use client'

import { grades } from '@/constatnts/subject.constant'
import { useSubjectForm } from '@/hooks/useSubjectForm'
import { Upload } from 'lucide-react'

import { Badge } from '@packages/ui/components/badge'
import { Button } from '@packages/ui/components/button'
import { Card, CardContent } from '@packages/ui/components/card'
import { Checkbox } from '@packages/ui/components/checkbox'
import { Input } from '@packages/ui/components/input'
import { Label } from '@packages/ui/components/label'
import { Textarea } from '@packages/ui/components/textarea'

export function SubjectForm() {
  const {
    formData,
    handleFormChange,
    handleArrayChange,
    handleArrayAdd,
    handleImageChange,
    handleSubmit,
    isSubmitLoading
  } = useSubjectForm()

  const renderArrayInputs = (
    field: 'class' | 'theme',
    title: string,
    placeholder: string
  ) => (
    <div className='space-y-2'>
      <div className='flex items-center gap-2'>
        <Label className='text-lg'>{title}</Label>
        <Badge variant='outline'>{formData[field].length}개</Badge>
      </div>
      <div className='space-y-4 p-4 bg-gray-50 rounded-lg'>
        {formData[field].map((item, index) => (
          <Input
            key={index}
            placeholder={`${placeholder} ${index + 1}`}
            value={item}
            onChange={(e) => handleArrayChange(field, e.target.value, index)}
            className='h-12 bg-white'
          />
        ))}
        <Button
          type='button'
          variant='outline'
          onClick={() => handleArrayAdd(field)}
          className='w-full h-12'
        >
          + {placeholder} 추가
        </Button>
      </div>
    </div>
  )

  return (
    <div className='p-8'>
      <Card className='max-w-4xl mx-auto'>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-8 pt-6'>
            <div className='space-y-2'>
              <Label htmlFor='title' className='text-lg'>
                수업 제목
              </Label>
              <Input
                id='title'
                placeholder='제목을 입력하세요'
                value={formData.title}
                onChange={(e) => handleFormChange('title', e.target.value)}
                className='h-12'
              />
            </div>
            <div className='space-y-2'>
              <Label className='text-lg'>학년</Label>
              <div className='flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg'>
                {grades.map((grade) => (
                  <div key={grade} className='flex items-center space-x-2'>
                    <Checkbox
                      id={grade}
                      checked={formData.grade.includes(grade)}
                      onCheckedChange={(checked) =>
                        handleFormChange(
                          'grade',
                          checked
                            ? [...formData.grade, grade]
                            : formData.grade.filter((g) => g !== grade)
                        )
                      }
                    />
                    <Label htmlFor={grade}>{grade}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className='space-y-2'>
              <Label className='text-lg'>수업 이미지</Label>
              <div className='border-2 border-dashed rounded-lg p-8 bg-gray-50'>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden'
                  id='image-upload'
                />
                <Label
                  htmlFor='image-upload'
                  className='flex flex-col items-center cursor-pointer'
                >
                  <Upload className='w-12 h-12 mb-2 text-gray-400' />
                  <span>
                    {formData.image
                      ? formData.image.name
                      : '이미지를 선택하거나 드래그하세요'}
                  </span>
                </Label>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Label className='text-lg'>수업 프로그램</Label>{' '}
                <Badge variant='outline'>{formData.class.length}개</Badge>
                <p className='text-xs text-gray-500'>
                  * 클래스를 넣어야할 것 같은데, iframe은 어떻게 넣을 것인지
                  논의 필요.
                </p>
              </div>
              <div className='space-y-4 p-4 bg-gray-50 rounded-lg'>
                {formData.class.map((item, index) => (
                  <Input
                    key={index}
                    placeholder={`수업 프로그램 ${index + 1}`}
                    value={item}
                    onChange={(e) =>
                      handleArrayChange('class', e.target.value, index)
                    }
                    className='h-12 bg-white'
                  />
                ))}
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => handleArrayAdd('class')}
                  className='w-full h-12'
                >
                  + 수업 프로그램 추가
                </Button>
              </div>
            </div>{' '}
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Label className='text-lg'>주제</Label>
                <Badge variant='outline'>{formData.theme.length}개</Badge>
              </div>
              <div className='space-y-4 p-4 bg-gray-50 rounded-lg'>
                {formData.theme.map((item, index) => (
                  <Input
                    key={index}
                    placeholder={`주제 ${index + 1}`}
                    value={item}
                    onChange={(e) =>
                      handleArrayChange('theme', e.target.value, index)
                    }
                    className='h-12 bg-white'
                  />
                ))}
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => handleArrayAdd('theme')}
                  className='w-full h-12'
                >
                  + 주제 추가
                </Button>
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='syllabus' className='text-lg'>
                강의 계획서
              </Label>
              <Textarea
                id='syllabus'
                placeholder='강의 계획서를 입력하세요'
                value={formData.syllabus}
                onChange={(e) => handleFormChange('syllabus', e.target.value)}
                className='min-h-[200px] resize-none'
              />
            </div>
            <Button type='submit' className='w-full h-12'>
              {isSubmitLoading ? '생성중...' : '완료'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
