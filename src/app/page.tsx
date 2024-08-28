import { CardsCSR } from '@/components/Cards/CardsCSR'
import { CardsPPR } from '@/components/Cards/CardsPPR'
import { CardsSSR } from '@/components/Cards/CardsSSR'
import { MemeCardLoading } from '@/components/Cards/MemeCard'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex fixed inset-0 flex-col items-center gap-4 p-2">
      <div>
        <h1 className="text-4xl pb-4">CSR</h1>
        <CardsCSR />
      </div>
      <div>
        <h1 className="text-4xl pb-4">SSR</h1>
        <CardsSSR />
      </div>
      <div>
        <h1 className="text-4xl pb-4">PPR</h1>
        <Suspense fallback={<MemeCardLoading count={3} />}>
          <CardsPPR />
        </Suspense>
      </div>
    </main>
  )
}
