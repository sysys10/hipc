'use client'

import Matter from 'matter-js'
import { useEffect, useRef } from 'react'

export default function MatterDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ballCountRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const { Engine, Render, World, Bodies, Runner } = Matter

    // 엔진 생성
    const engine = Engine.create({
      gravity: { x: 0, y: 1 } // 중력을 약간 줄임
    })

    // 렌더러 생성
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'transparent',
        wireframes: false
      }
    })

    // 벽 생성
    const walls = [
      // 바닥
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 60, {
        isStatic: true,
        render: { visible: false }
      }),
      // 왼쪽 벽
      Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, {
        isStatic: true,
        render: { visible: false }
      }),
      // 오른쪽 벽
      Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, {
        isStatic: true,
        render: { visible: false }
      })
    ]

    World.add(engine.world, walls)

    // 공 생성 함수
    const createBall = () => {
      if (ballCountRef.current >= 30) return

      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B5DE5', '#F15BB5', '#00BBF9', '#00F5D4']
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = Math.random() * 30 + 20 // 20-50 사이의 크기

      const ball = Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50, // x 위치
        -50, // y 위치
        size / 2, // 반지름
        {
          restitution: 0.6,
          friction: 0.1,
          density: 0.001,
          render: {
            fillStyle: color
          }
        }
      )

      World.add(engine.world, ball)
      ballCountRef.current++
    }

    // 0.5초마다 공 생성
    const interval = setInterval(createBall, 500)

    // 엔진과 렌더러 실행
    Runner.run(engine)
    Render.run(render)

    // 창 크기 변경 처리
    const handleResize = () => {
      render.canvas.width = window.innerWidth
      render.canvas.height = window.innerHeight

      // 벽 위치 업데이트
      Matter.Body.setPosition(walls[0]!, Matter.Vector.create(window.innerWidth / 2, window.innerHeight + 30))
      Matter.Body.setPosition(walls[2]!, Matter.Vector.create(window.innerWidth + 30, window.innerHeight / 2))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
      World.clear(engine.world, false)
      Engine.clear(engine)
      Render.stop(render)
      if (render.canvas) {
        render.canvas.remove()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className='absolute z-[9999] inset-0'>
      <canvas ref={canvasRef} />
    </div>
  )
}
