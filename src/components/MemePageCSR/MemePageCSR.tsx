'use client'

import { Information } from '../Information'
import { Photo } from '../Photo'
import { MemesService } from '@/services/memes'
import { useQuery } from '@tanstack/react-query'
import { MemePageLoading } from './MemePageCSR.loading'
import { notFound } from 'next/navigation'

export function MemePageCSR({ memeId }: { memeId: string }) {
  const memesService = new MemesService()

  const {
    data: dataMeme,
    isLoading,
    error
  } = useQuery({
    queryKey: ['getMeme'],
    queryFn: () => memesService.getMeme(memeId),
    staleTime: 300000
  })

  if (isLoading) return <MemePageLoading />

  if (!dataMeme || error) return notFound()

  const { img, imgAlt, ...restDataMeme } = dataMeme

  return (
    <div className="flex gap-32">
      <Photo imgSrc={img} imgAlt={imgAlt} />
      <Information information={restDataMeme} />
    </div>
  )
}
