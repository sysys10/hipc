'use client'

import LoginPage from '@/app/(with-navbar)/auth/page'
import { useRouter, useSearchParams } from 'next/navigation'

import { Dialog, DialogContent, DialogTitle } from '@packages/ui/components/dialog'

export default function LoginModal() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const modalType = searchParams.get('modal')
  const closeModal = () => {
    router.back()
  }
  if (!modalType) {
    return null
  }

  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <LoginPage />
      </DialogContent>
    </Dialog>
  )
}
