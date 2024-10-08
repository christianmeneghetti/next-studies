export type HttpResponse<T> = {
  data?: T
  error?: string
  status: number
}
