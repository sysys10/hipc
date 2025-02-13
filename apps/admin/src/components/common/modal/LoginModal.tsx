'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { CheckButton, CheckInput } from '@packages/ui/components/check'

function LoginForm() {
  const [isSchool, setIsSchool] = useState(true)

  const handleSchool = (school: boolean) => {
    setIsSchool(school)
  }

  return (
    <div className='flex flex-col justify-start items-center h-full w-full p-4 text-lg text-deactivate font-bold'>
      <div className='flex flex-col items-center gap-8 mb-2 md:mb-8'>
        <Image
          src='/assets/images/logo.png'
          alt='Logo'
          width={149}
          height={82}
        />
        <h1 className='text-xl text-black font-bold text-center'>
          위인과 함께하는 코끼리 탐구 살롱
          <br />
          로그인
        </h1>
      </div>
      <div className='flex w-full text-center'>
        <div
          onClick={() => handleSchool(true)}
          className={`w-1/2 pb-1 border-b-2 ${isSchool ? 'border-b-skyblue' : 'border-b-bordergrey'}`}
        >
          학교용
        </div>
        <div
          onClick={() => handleSchool(false)}
          className={`w-1/2 pb-1 border-b-2 ${!isSchool ? 'border-b-skyblue' : 'border-b-bordergrey'}`}
        >
          개인용
        </div>
      </div>

      <div className='w-full flex flex-col py-10 gap-2'>
        {isSchool ? (
          <>
            <CheckInput type='text' placeholder='학교 코드 입력' />
            <select className='w-full font-bold border-bordergrey border-2 rounded-lg pl-4 py-4 bg-white flex items-center justify-center'>
              <option value=''>아이디</option>
            </select>
          </>
        ) : (
          <>
            <CheckInput type='text' placeholder='아이디' />
            <CheckInput type='password' placeholder='비밀번호' />
          </>
        )}
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <Link href='/main'>
          <CheckButton variant='filled' size='lg'>
            로그인
          </CheckButton>
        </Link>
        {!isSchool && (
          <>
            <CheckButton variant='outlined' size='lg'>
              회원가입
            </CheckButton>
            <div className='flex text-base justify-center gap-4 text-deactivate'>
              <button>아이디 찾기</button>ㅣ<button>비밀번호 찾기</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export { LoginForm }
