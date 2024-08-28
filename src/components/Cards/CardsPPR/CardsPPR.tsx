import { MemesService } from '@/services/memes'
import { MemeCard } from '../MemeCard'

export async function CardsPPR() {
  const memesService = new MemesService()
  const dataMemes = await memesService.getAllMemes()

  return (
    <div className="flex gap-4">
      {dataMemes.map(({ description, ...restDataMeme }) => (
        <MemeCard
          dataMeme={restDataMeme}
          renderType="PPR"
          key={restDataMeme.id}
        />
      ))}
    </div>
  )
}
