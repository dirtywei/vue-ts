import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: <T>(config: AxiosResponse<T>) => AxiosResponse<T>
  responseInterceptorsCatch?: (err: any) => any
}

// 自定义传入参数
export interface RequestConfig extends InternalAxiosRequestConfig {
  interceptors?: RequestInterceptors
  hasToken?: boolean
  hasGame?: boolean
  hasOSType?: boolean
  envType?: boolean
  gameCenterEnv?: boolean
}
