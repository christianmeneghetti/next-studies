import { Information } from '../Information'
import { Photo } from '../Photo'
import { MemesService } from '@/services/memes'

export async function MemePagePPR({ memeId }: { memeId: string }) {
  const memesService = new MemesService()
  const dataMeme = await memesService.getMeme(memeId)
  const { img, imgAlt, ...restDataMeme } = dataMeme

  return (
    <div className="flex fixed items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32">
      <Photo imgSrc={img} imgAlt={imgAlt} />
      <Information information={restDataMeme} />
    </div>
  )
}
