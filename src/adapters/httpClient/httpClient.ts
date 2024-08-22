import { HttpResponse } from './httpClient.types'

export class HttpClient {
  async request<T>(
    url: string,
    options?: RequestInit
  ): Promise<HttpResponse<T>> {
    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        return {
          status: response.status,
          error: `Erro ao realizar o fetch: ${response.statusText}`
        }
      }

      const data = await response.json()
      return {
        status: response.status,
        data
      }
    } catch (error) {
      return {
        status: 500,
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      }
    }
  }
}
