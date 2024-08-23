import { HttpClient } from '@/adapters/httpClient'
import { Meme, MemesResponseApi } from './memes.types'

export class MemesService {
  constructor(private readonly httpClient = new HttpClient()) {}

  async getAllMemes(): Promise<Meme[]> {
    const { data, error } = await this.httpClient.request<MemesResponseApi[]>(
      `http://localhost:3000/memes`,
      {
        cache: 'force-cache'
      }
    )

    if (error || !data) {
      throw new Error(`Erro: ${error}`)
    }

    return this.formatMemesData(data)
  }

  async getMeme(productId: string): Promise<Meme> {
    const { data, error } = await this.httpClient.request<MemesResponseApi>(
      `http://localhost:3000/memes/${productId}`,
      {
        cache: 'force-cache'
      }
    )

    if (error || !data) {
      throw new Error(`Erro: ${error}`)
    }

    return this.formatMemeData(data)
  }

  private formatMemeData(memeData: MemesResponseApi) {
    return {
      id: memeData.id,
      name: memeData.name,
      img: memeData.img,
      imgAlt: memeData.img_alt,
      description: memeData.description,
      attackPower: memeData.attack_power,
      hittingPoints: memeData.hitting_points
    }
  }

  private formatMemesData(memesData: MemesResponseApi[]) {
    return memesData.map((memeData) => {
      return this.formatMemeData(memeData)
    })
  }
}