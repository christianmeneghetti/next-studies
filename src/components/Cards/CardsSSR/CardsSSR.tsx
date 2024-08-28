import { MemesService } from '@/services/memes'
import { MemeCard, MemeCardLoading } from '../MemeCard'

async function fetchDataMeme() {
  const memesService = new MemesService()
  const dataMemes = await memesService.getAllMemes()

  return dataMemes
}

export async function CardsSSR() {
  const dataMemes = await fetchDataMeme()

  if (!dataMemes) return null

  return (
    <div className="flex gap-4">
      {dataMemes.map(({ description, ...restDataMeme }) => (
        <MemeCard
          dataMeme={restDataMeme}
          renderType="SSR"
          key={restDataMeme.id}
        />
      ))}
    </div>
  )
}
