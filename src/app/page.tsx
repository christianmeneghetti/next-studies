'use client'
import { MemesService } from '@/services/memes'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const memesService = new MemesService()

  const {
    data: dataMemes,
    isLoading,
    error
  } = useQuery({
    queryKey: ['getMemes'],
    queryFn: () => memesService.getMeme('1')
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
