import axios from 'axios'
import { RequestDefaultConfig, RequestFdDefaultConfig } from '@/config/http'
import { reqResolve, resResolve, reqReject, resReject } from './interceptors'

function createAxios(config = {}) {
  const service = axios.create({
    ...config
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

const request = createAxios(RequestDefaultConfig)
const requestFd = createAxios(RequestFdDefaultConfig)

export { request, requestFd }
