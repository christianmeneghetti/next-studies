export enum RenderType {
  'CSR' = 'client-side',
  'SSR' = 'server-side',
  'PPR' = 'pre-render'
}

type DataMeme = {
  id: number
  name: string
  img: string
  imgAlt: string
  attackPower: number
  hittingPoints: number
}

export type MemeCardProps = {
  dataMeme: DataMeme
  renderType: 'CSR' | 'SSR' | 'PPR'
}
