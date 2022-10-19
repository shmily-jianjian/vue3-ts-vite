import request from '@/request'
import type { LoginParams, LoginResult } from '@/api/typing'

export const Login = (params: LoginParams) => {
  return request.POST<LoginResult>('/login', params)
}
