import { CardsCSR } from '@/components/Cards/CardsCSR'
import { CardsPPR } from '@/components/Cards/CardsPPR'
import { CardsSSR } from '@/components/Cards/CardsSSR'
import { MemeCardLoading } from '@/components/Cards/MemeCard'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex fixed inset-0 flex-col items-center gap-4 p-2">
      <div>
        <Link href={'/meme/client-side'}>
          <h1 className="text-4xl pb-4">CSR</h1>
        </Link>
        <CardsCSR />
      </div>
      <div>
        <Link href={'/meme/server-side'}>
          <h1 className="text-4xl pb-4">SSR</h1>
        </Link>
        <CardsSSR />
      </div>
      <div>
        <Link href={'/meme/pre-render'}>
          <h1 className="text-4xl pb-4">PPR</h1>
        </Link>
        <Suspense fallback={<MemeCardLoading count={3} />}>
          <CardsPPR />
        </Suspense>
      </div>
    </main>
  )
}
