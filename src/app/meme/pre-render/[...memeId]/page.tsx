import { About } from '@/components/About'
import { memePageProps } from './meme.types'
import { MemePageLoadingPPR, MemePagePPR } from '@/components/MemePagePPR'
import { Suspense } from 'react'

export default function Meme({ params: { memeId } }: memePageProps) {
  return (
    <div className="flex flex-col items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32 p-16">
      <Suspense fallback={<MemePageLoadingPPR />}>
        <MemePagePPR memeId={memeId} />
      </Suspense>
      <About />
    </div>
  )
}
