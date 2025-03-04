import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { boj_handle } = await request.json()
  const { data } = await axios.get(`https://solved.ac/api/v3/user/show?handle=${boj_handle}`)
  return NextResponse.json({ message: 'Hello, World!', data })
}
