import { use } from 'react'
import { Information } from '../Information'
import { Photo } from '../Photo'
import { MemesService } from '@/services/memes'

async function fetchDataMemes(memeId: string) {
  const memesService = new MemesService()
  const dataMemes = await memesService.getMeme(memeId)

  return dataMemes
}

export function MemePagePPR({ memeId }: { memeId: string }) {
  const dataMemes = use(fetchDataMemes(memeId))
  const { img, imgAlt, ...restDataMemes } = dataMemes

  return (
    <div className="flex fixed items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32">
      <Photo imgSrc={img} imgAlt={imgAlt} />
      <Information information={restDataMemes} />
    </div>
  )
}
