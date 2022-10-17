import axios, { AxiosRequestConfig } from 'axios'
import { defaultConfig, getMsgToStatus } from './config'
import { globalStore } from '@/store/modules/global'
import type { ResponseResult } from './typing'
import { notification, message, loadingBar } from '@/config/feedback'

// 声明一个容器存储当前正在进行的请求
const requestListeners: AbortController[] = []

// 暴露一个清空容器的方法
export const clearRequestListeners = () => {
  requestListeners.length &&
    requestListeners.forEach(controller => {
      controller.abort()
      console.log('路由跳转了取消所有请求')
    })
  requestListeners.length = 0
}

const instance = axios.create({
  ...defaultConfig
})

instance.interceptors.request.use(
  config => {
    loadingBar.start()
    config.headers = config.headers || {}
    config.headers.token = globalStore().userInfo.token || ''
    const controller = new AbortController()
    requestListeners.push(controller)
    config.signal = controller.signal
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    loadingBar.finish()
    const { data } = response
    if (data.code === 21000) {
      notification.error({
        content: '登录已过期',
        duration: 2000
      })
      window.location.href = '/login'
    }
    return data
  },
  error => {
    loadingBar.finish()
    if (axios.isCancel(error)) {
      return Promise.reject(error)
    }

    const status = error?.response?.status
    const errMsg = getMsgToStatus(status) || '服务异常'
    if (error.response) {
      notification.error({
        content: errMsg,
        duration: 2000
      })
    } else {
      if (error?.message?.indexOf('timeout') !== -1) {
        notification.error({
          content: '网络超时',
          duration: 2000
        })
      }
    }
    return Promise.reject(error)
  }
)

const GET = <T>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
): Promise<ResponseResult<T>> => {
  return instance.get(url, {
    params: data,
    ...config
  })
}

const POST = <T>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
): Promise<ResponseResult<T>> => {
  return instance.post(url, data, config)
}

export default { GET, POST }
