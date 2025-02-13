const NavigationBarLists = [
  {
    name: '소개',
    path: '/about'
    // dropdownList: [
    //   { name: '소개', path: '/about' },
    //   { name: '조직도', path: '/about/organization' },
    //   { name: 'contact', path: '/about/contact' }
    // ]
  },
  {
    name: '스터디',
    path: '/study'
  },
  {
    name: '공지사항',
    path: '/notice'
    // dropdownList: [
    //   { name: '공지사항', path: '/notice' }
    //   // { name: '투표', path: '/about' },
    //   // { name: '결산안', path: '/notice/financial' }
    // ]
  },
  {
    name: '게시글',
    path: '/board/1'
  },
  {
    name: '활동',
    dropdownList: [
      { name: '갤러리', path: '/activity/gallery' },
      { name: '활동일정', path: '/activity/calendar' }
    ]
  }
  // {
  //   name: '마이 페이지',
  //   dropdownList: [
  //     { name: '마이 페이지', path: '/' },
  //     { name: '로그아웃', path: '/' },
  //     { name: '회원가입', path: '/' }
  //   ]
  // }
]
export { NavigationBarLists }
