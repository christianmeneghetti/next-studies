import { MemesService } from '@/services/memes'
import { MemePage } from '@/components/MemePage'
import { notFound } from 'next/navigation'
import { memePageProps } from './meme.types'

async function fetchDataMemes(memeId: string) {
  const memesService = new MemesService()
  const dataMemes = await memesService.getMeme(memeId)

  return dataMemes
}

export default async function Meme({ params: { memeId } }: memePageProps) {
  const dataMemes = await fetchDataMemes(memeId)

  if (!dataMemes) return notFound()

  return <MemePage dataMemes={dataMemes} />
}
