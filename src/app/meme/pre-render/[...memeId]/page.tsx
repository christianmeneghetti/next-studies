import { memePageProps } from './meme.types'
import { MemePageLoadingPPR, MemePagePPR } from '@/components/MemePagePPR'
import { Suspense } from 'react'

export default function Meme({ params: { memeId } }: memePageProps) {
  return (
    <Suspense fallback={<MemePageLoadingPPR />}>
      <MemePagePPR memeId={memeId} />
    </Suspense>
  )
}
