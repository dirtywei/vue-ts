import { request } from '../utils/http'
import { proxyUrl } from '@/config/http'

//账密登录
export default {
  fetchLogin: (data: any) => {
    request({ url: proxyUrl + '/transpond/sys/login', method: 'post', data })
  }
}
