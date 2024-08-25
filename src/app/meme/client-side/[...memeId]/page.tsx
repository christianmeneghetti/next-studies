'use client'
import { MemesService } from '@/services/memes'
import { useQuery } from '@tanstack/react-query'
import { memePageProps } from './meme.types'
import { MemePage, MemePageLoading } from '@/components/MemePage'
import { notFound } from 'next/navigation'

export default function Meme({ params: { memeId } }: memePageProps) {
  const memesService = new MemesService()

  const {
    data: dataMemes,
    isLoading,
    error
  } = useQuery({
    queryKey: ['getMemes'],
    queryFn: () => memesService.getMeme(memeId)
  })

  if (isLoading) return <MemePageLoading />

  if (!dataMemes || error) return notFound()

  return <MemePage dataMemes={dataMemes} />
}
