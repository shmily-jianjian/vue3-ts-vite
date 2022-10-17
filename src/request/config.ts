import type { CreateAxiosDefaults } from 'axios'

// 默认axios的配置
export const defaultConfig: CreateAxiosDefaults = {
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

// 状态码处理
export const getMsgToStatus = (status: number) => {
  const msgMap = new Map([
    [400, '错误请求'],
    [401, '请求未授权'],
    [404, '请求路径错误'],
    [405, '请求方法不允许'],
    [500, '服务器异常']
  ])
  return msgMap.get(status)
}
