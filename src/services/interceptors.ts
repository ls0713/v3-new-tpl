import { client } from './client'

interface response {
  data: any
  code: number
  msg: string
}

client.interceptors.request.use(function <T>(config: T): T {
  return config
}, function (error: any): Promise<any> {
  return Promise.reject(error)
})

client.interceptors.response.use((response) => {
  return response
}, function (error: any) {
  return Promise.reject(error)
})

