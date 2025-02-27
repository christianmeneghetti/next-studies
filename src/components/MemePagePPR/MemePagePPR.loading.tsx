import { InformationLoading } from '../Information'
import { PhotoLoading } from '../Photo'

export function MemePageLoadingPPR() {
  return (
    <div className="flex gap-32">
      <PhotoLoading />
      <InformationLoading />
    </div>
  )
}
