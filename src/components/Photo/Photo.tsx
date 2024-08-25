import { IMAGE_BLUR_URL } from '@/constants'
import Image from 'next/image'
import { PhotoProps } from './Photo.types'

export function Photo({ imgSrc, imgAlt }: PhotoProps) {
  return (
    <div className="flex w-[360px] h-[360px]">
      <Image
        src={imgSrc || IMAGE_BLUR_URL}
        alt={imgAlt || 'Imagem do card'}
        width={360}
        height={360}
        priority
      />
    </div>
  )
}
