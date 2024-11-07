import { CardsPPR } from '@/components/Cards/CardsPPR'
import { MemeCardLoading } from '@/components/Cards/MemeCard'
import { Suspense } from 'react'

export default function PPRListing() {
  return (
    <div className="flex fixed inset-0 flex-col items-center justify-center p-2">
      <Suspense fallback={<MemeCardLoading count={3} />}>
        <CardsPPR />
      </Suspense>
    </div>
  )
}
