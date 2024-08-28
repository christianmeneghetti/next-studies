import { MemesService } from '@/services/memes'
import { MemePage } from '@/components/MemePage'
import { notFound } from 'next/navigation'
import { memePageProps } from './meme.types'

async function fetchDataMeme(memeId: string) {
  const memesService = new MemesService()
  const dataMeme = await memesService.getMeme(memeId)

  return dataMeme
}

export default async function Meme({ params: { memeId } }: memePageProps) {
  const dataMeme = await fetchDataMeme(memeId)

  if (!dataMeme) return notFound()

  return <MemePage dataMemes={dataMeme} />
}
