import { LoginParams } from '@/api/typing'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/login', // 注意，这里只能是string格式
    method: 'post',
    timeout: 1000,
    response: ({ body }: { body: LoginParams }) => {
      let token = ''
      if (body.userName === 'admin') {
        token = 'admin'
      } else {
        token = 'user'
      }
      return {
        code: 0,
        data: {
          token
        },
        messsage: '登录成功'
      }
    }
  }
] as MockMethod[]
