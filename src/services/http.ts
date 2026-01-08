import { client } from './client'

export const POST = <T>(
  url: string,
  data?: Record<string, any>,
  options?: any
): Promise<T> => {
  return client.post(
    url,
    data,
    options
  )
}

export const GET = <T>(url: string,
  params?: Record<string, any>,
  options?: any): Promise<T> => {
  return client.get(
    url, { params, ...options }
  )
}

export const PUT = <T>(
  url: string,
  data?: Record<string, any>,
  options?: any
): Promise<T> => {
  return client.put(url, data, options)
}
