import { InformationLoading } from '../Information'
import { PhotoLoading } from '../Photo'

export function MemePageLoading() {
  return (
    <div className="flex fixed items-center justify-center inset-0 bg-zinc-800 -z-10 gap-32">
      <PhotoLoading />
      <InformationLoading />
    </div>
  )
}
