'use client'
import { MemesService } from '@/services/memes'
import { MemeCard, MemeCardLoading } from '../MemeCard'
import { useQuery } from '@tanstack/react-query'

export function CardsCSR() {
  const memesService = new MemesService()

  const {
    data: dataMemes,
    isLoading,
    error
  } = useQuery({
    queryKey: ['getAllMemes'],
    queryFn: () => memesService.getAllMemes()
  })

  if (isLoading) return <MemeCardLoading count={3} />

  if (!dataMemes || error) return null

  return (
    <div className="flex gap-4">
      {dataMemes.map(({ description, ...restDataMeme }) => (
        <MemeCard
          dataMeme={restDataMeme}
          renderType="CSR"
          key={restDataMeme.id}
        />
      ))}
    </div>
  )
}
