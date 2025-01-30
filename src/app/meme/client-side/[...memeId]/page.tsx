import { About } from '@/components/About'
import { MemePageCSR } from '@/components/MemePageCSR'
import { memePageProps } from './meme.types'

export default function Meme({ params: { memeId } }: memePageProps) {
  return (
    <div className="flex flex-col items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32 p-16">
      <MemePageCSR memeId={memeId} />
      <About />
    </div>
  )
}
