'use client'

import { useMounted } from '@/hooks'
import { createPortal } from 'react-dom'

import { HIPCicon } from '../icon'

interface ModalPortalProps {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
  className?: string
}

function ModalPortal({ isOpen, handleClose, children, className }: ModalPortalProps) {
  const isMounted = useMounted()

  if (!isMounted || !isOpen) return null
  const modalRoot = document.getElementById('modal-root') as HTMLElement
  return createPortal(
    <div className='fixed inset-0 z-50 bg-black/60 ' onClick={handleClose}>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  bg-background-secondary text-text rounded-lg border-border p-4  ${className} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='absolute top-0 right-0 p-3'>
          <button onClick={handleClose}>
            <HIPCicon name='close' className='w-6 h-6 text-text-secondary' />
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  )
}
export { ModalPortal }
