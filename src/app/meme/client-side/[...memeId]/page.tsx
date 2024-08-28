'use client'
import { MemesService } from '@/services/memes'
import { useQuery } from '@tanstack/react-query'
import { memePageProps } from './meme.types'
import { MemePage, MemePageLoading } from '@/components/MemePage'
import { notFound } from 'next/navigation'

export default function Meme({ params: { memeId } }: memePageProps) {
  const memesService = new MemesService()

  const {
    data: dataMeme,
    isLoading,
    error
  } = useQuery({
    queryKey: ['getMeme'],
    queryFn: () => memesService.getMeme(memeId)
  })

  if (isLoading) return <MemePageLoading />

  if (!dataMeme || error) return notFound()

  return <MemePage dataMemes={dataMeme} />
}
