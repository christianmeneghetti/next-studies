import { Information } from '../Information'
import { MemePageProps } from './MemePage.types'
import { Photo } from '../Photo'

export function MemePage({ dataMemes }: MemePageProps) {
  const { img, imgAlt, ...restDataMemes } = dataMemes

  return (
    <div className="flex fixed items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32">
      <Photo imgSrc={img} imgAlt={imgAlt} />
      <Information information={restDataMemes} />
    </div>
  )
}
