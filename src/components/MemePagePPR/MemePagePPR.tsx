import { Information } from '../Information'
import { Photo } from '../Photo'
import { MemesService } from '@/services/memes'

export async function MemePagePPR({ memeId }: { memeId: string }) {
  const memesService = new MemesService()
  const dataMeme = await memesService.getMeme(memeId)
  const { img, imgAlt, ...restDataMeme } = dataMeme

  return (
    <div className="flex gap-32">
      <Photo imgSrc={img} imgAlt={imgAlt} />
      <Information information={restDataMeme} />
    </div>
  )
}
