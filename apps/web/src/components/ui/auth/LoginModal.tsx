import LoginPage from '@/app/(with-navbar)/auth/page'
import { ModalPortal } from '@/components/common'

export function LoginModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <ModalPortal isOpen={isOpen} handleClose={() => setIsOpen(false)} className='max-w-md h-fit w-full border-border border'>
      <div className='w-full flex items-center justify-center'>
        <LoginPage />
      </div>
    </ModalPortal>
  )
}
