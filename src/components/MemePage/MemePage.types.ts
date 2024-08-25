type DataMemes = {
  id: number
  name: string
  img: string
  imgAlt: string
  description: string
  attackPower: number
  hittingPoints: number
}

export type MemePageProps = {
  dataMemes: DataMemes
}
