import { InformationLoading } from '../Information'
import { PhotoLoading } from '../Photo'

export function MemePageLoading() {
  return (
    <div className="flex gap-32">
      <PhotoLoading />
      <InformationLoading />
    </div>
  )
}
