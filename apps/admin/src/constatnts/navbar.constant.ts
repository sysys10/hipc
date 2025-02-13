import { leftSideElementProps } from '@/types/sidebar.type'

const leftSideElements: leftSideElementProps[] = [
  {
    name: 'user',
    to: '/main/user',
    title: '사용자 관리',
    children: [{ to: '/main/user/permission', title: '권한 관리' }]
  },
  {
    name: 'subject',
    to: '/main/subject',
    title: '과목 관리',
    children: [
      { to: '/main/subject/list', title: '과목 목록' },
      { to: '/main/subject/create', title: '과목 생성' }
    ]
  },
  {
    name: 'class',
    to: '/main/class',
    title: '수업 관리',
    children: [
      { to: '/main/class/list', title: '수업 목록' },
      { to: '/main/class/create', title: '수업 생성' }
    ]
  }
]
const leftSideBottomElements: leftSideElementProps[] = [
  {
    to: '/',
    name: 'logout',
    title: '로그아웃'
  }
]

export { leftSideElements, leftSideBottomElements }
export type { leftSideElementProps }
