'use client'

import { Information } from '../Information'
import { Photo } from '../Photo'
import { MemesService } from '@/services/memes'
import { notFound } from 'next/navigation'

async function fetchDataMeme(memeId: string) {
  const memesService = new MemesService()
  const dataMeme = await memesService.getMeme(memeId)

  return dataMeme
}

export async function MemePagesSSR({ memeId }: { memeId: string }) {
  const dataMeme = await fetchDataMeme(memeId)

  if (!dataMeme) return notFound()

  const { img, imgAlt, ...restDataMeme } = dataMeme

  return (
    <div className="flex gap-32">
      <Photo imgSrc={img} imgAlt={imgAlt} />
      <Information information={restDataMeme} />
    </div>
  )
}
