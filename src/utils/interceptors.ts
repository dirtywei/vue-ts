import { type AxiosResponse } from 'axios'
import { RequestConfig } from '@/types/http'
//请求拦截器
export function reqResolve(config: RequestConfig) {
  //doing thing
  return config
}

//请求错误拦截器
export function reqReject(error: any) {
  console.error('请求异常，请稍后重试' + error)
  return Promise.reject(error)
}
//响应拦截器
export function resResolve(response: AxiosResponse) {
  return Promise.resolve(response.data)
}

//响应错误拦截器
export function resReject(error: any) {
  console.error('响应异常，请稍后重试' + error)
  return Promise.reject(error)
}
