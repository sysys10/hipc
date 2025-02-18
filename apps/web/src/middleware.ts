import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 인증이 필요하지 않은 public 라우트들
const publicRoutes = ['/', '/auth', '/study']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // public 라우트는 인증 체크 스킵

  const token = await getToken({
    req: request,
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET || ''
  })
  if (!token?.email && pathname.startsWith('/assign')) {
    const redirectUrl = new URL('/login', request.url)
    return NextResponse.redirect(redirectUrl, 302)
  }

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

// 미들웨어가 적용될 라우트 설정
export const config = {
  matcher: [
    // public 라우트 제외
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ]
}
