'use client'

import LoginPage from '@/app/(with-navbar)/auth/page'
import { useRouter } from 'next/navigation'

import { Dialog, DialogContent, DialogTitle } from '@packages/ui/components/dialog'

export default function LoginModalPage() {
  const router = useRouter()
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <LoginPage />
      </DialogContent>
    </Dialog>
  )
}
