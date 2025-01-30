import { About } from '@/components/About'
import { MemePagesSSR } from '@/components/MemePageSSR'
import { memePageProps } from './meme.types'

export default async function Meme({ params: { memeId } }: memePageProps) {
  return (
    <div className="flex flex-col items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32 p-16">
      <MemePagesSSR memeId={memeId} />
      <About />
    </div>
  )
}
