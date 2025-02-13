'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalPortalProps {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

function ModalPortal({ isOpen, handleClose, children }: ModalPortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div className='fixed inset-0 z-50 bg-black/20' onClick={handleClose}>
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   max-w-[28.75rem] w-full h-4/5 md:h-full md:max-h-[41.625rem] bg-white rounded-lg border-border p-4'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
export { ModalPortal }
