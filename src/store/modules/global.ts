/**
 * description 存放全局数据(用户信息等等)
 */

import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

interface UserInfo {
  name?: string
  age?: number
  sex?: string
}

export const globalStore = defineStore('globalStore', {
  state() {
    const userInfo: UserInfo = reactive({})
    const token = ref<string>('')

    const changeUserInfo = () => {
      userInfo.name = 'xiaojin'
    }

    const saveToken = (val: string) => {
      token.value = val
    }

    return { userInfo, changeUserInfo, token, saveToken }
  },
  persist: [
    {
      storage: localStorage,
      paths: ['userInfo'],
      key: 'userInfo'
    },
    {
      storage: localStorage,
      paths: ['token'],
      key: 'token'
    }
  ]
})
