import { DescriptionProps } from './Information.types'

export function Information({ information }: DescriptionProps) {
  const { name, description, attackPower, hittingPoints } = information

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-md overflow-hidden w-[500px] p-4 gap-4">
      <div className="flex justify-center bg-zinc-700 w-full p-4 font-bold">
        {name}
      </div>
      <div className="flex justify-center  text-justify h-[152px] overflow-y-auto">
        {description}
      </div>
      <div className="flex flex-wrap justify-between items-center w-full  pt-0 gap-1">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-4xl">swords</span>
          <b className="text-4xl">{attackPower}</b>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-red-500 text-4xl">
            favorite
          </span>
          <b className="text-4xl">{hittingPoints}</b>
        </div>
      </div>
    </div>
  )
}
