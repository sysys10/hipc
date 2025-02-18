// import chromium from 'chrome-aws-lambda'
// import { NextResponse } from 'next/server'
// import puppeteer from 'puppeteer-core'
import axios from 'axios'
import { NextResponse } from 'next/server'

// export const config = {
//   runtime: 'edge'
// }
// export async function POST(request: Request) {
//   const { boj_handle } = await request.json()

//   if (!boj_handle) {
//     return NextResponse.json({ message: '백준 핸들 내놔' })
//   }

//   let browser = null
//   try {
//     // 로컬 개발 환경인지 Vercel 환경인지 확인
//     const isDev = process.env.NODE_ENV === 'development'

//     browser = await puppeteer.launch(
//       isDev
//         ? {
//             // 로컬 개발 환경 설정
//             args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
//             headless: true,
//             executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' // 로컬 Chrome 경로
//           }
//         : {
//             // Vercel 환경 설정
//             args: chromium.args,
//             executablePath: await chromium.executablePath,
//             headless: chromium.headless
//           }
//     )

//     const page = await browser.newPage()
//     await page.setViewport({ width: 1280, height: 800 })

//     await page.goto('https://solved.ac/profile/' + boj_handle, {
//       waitUntil: 'networkidle0'
//     })

//     // 셀렉터 대기
//     await page.waitForSelector('.css-1midmz7')

//     const solvedac_data = await page.evaluate(() => {
//       const elements = document.querySelectorAll('.css-1midmz7')
//       if (!elements || elements.length === 0) {
//         return { solvedac_string_tier: 'Unrated', solvedac_solved_count: 0 }
//       }

//       const solvedac_string_tier = elements[0]?.querySelector('span')?.textContent || 'Unrated'
//       const solvedac_solved_count = elements[2]?.querySelector('b')?.textContent || 0

//       return {
//         solvedac_string_tier,
//         solvedac_solved_count
//       }
//     })

//     console.log(solvedac_data)
//     await browser.close()

//     return NextResponse.json({
//       message: '됨',
//       solvedac_data
//     })
//   } catch (error) {
//     console.error('Error:', error)
//     if (browser) {
//       await browser.close()
//     }
//     return NextResponse.json({
//       message: '백준 핸들 오류',
//       error: error instanceof Error ? error.message : 'Unknown error'
//     })
//   }
// }

export async function POST(request: Request) {
  const { boj_handle } = await request.json()
  const { data } = await axios.get(`https://solved.ac/api/v3/user/show?handle=${boj_handle}`)
  return NextResponse.json({ message: 'Hello, World!', data })
}
