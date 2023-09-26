import { isEmpty } from '@/utils/is'
import { ContentType } from '@/enum/http'

// 请求代理配置
export const proxyUrl = '/transpond'
export const proxySDKManager = '/sdkmanager'
export const proxyUrlHotUpdate = '/xfgw/hot' // 热更
export const proxyAnnounce = '/xfgw/announcement'
export const proxyAdvertising = '/ad'
export const proxyWeixinmp = '/weixinmp'
export const proxyOptionalres = '/optionalres'

export const RequestDefaultConfig = {
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 15000,
  // withCredentials: true, // send cookies when cross-domain requests
  headers: {
    'Content-Type': ContentType.json
  }
}

export const RequestFdDefaultConfig = {
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 1800000,
  // withCredentials: true, // send cookies when cross-domain requests
  method: 'post',
  headers: {
    'Content-Type': ContentType.form
  },
  transformRequest: [
    function (data: any) {
      const formData = new FormData()
      Object.keys(data).forEach((key: string) => {
        if (Array.isArray(data[key])) {
          for (const i in data[key]) {
            formData.append(key, data[key][i])
          }
        } else {
          if (!isEmpty(data[key])) {
            formData.append(key, data[key])
          }
        }
      })
      return formData
    }
  ]
}
