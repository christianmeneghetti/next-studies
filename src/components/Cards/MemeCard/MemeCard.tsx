import Image from 'next/image'
import { MemeCardProps, RenderType } from './MemeCard.types'

export function MemeCard({ dataMeme, renderType }: MemeCardProps) {
  const { id, name, img, imgAlt, attackPower, hittingPoints } = dataMeme

  return (
    <a
      href={`/meme/${RenderType[renderType]}/${id}`}
      className=" bg-zinc-900 rounded-md overflow-hidden p-2"
    >
      <div className="text-center pb-2">{name}</div>
      <div className="flex w-[200px] h-[160px] rounded-sm overflow-hidden">
        <Image src={img} alt={imgAlt} width={200} height={160} priority />
      </div>
      <div className="flex justify-between w-full p-2 pb-0 gap-1">
        <div className="flex flex-wrap content-center">
          <span className="material-symbols-outlined text-2xl">swords</span>
          <b className="text-2xl">{attackPower}</b>
        </div>
        <div className="flex flex-wrap content-center">
          <span className="material-symbols-outlined text-red-500 text-2xl">
            favorite
          </span>
          <b className="text-2xl">{hittingPoints}</b>
        </div>
      </div>
    </a>
  )
}
