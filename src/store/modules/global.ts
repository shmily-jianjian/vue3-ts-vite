/**
 * description 存放全局数据(用户信息等等)
 */

import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  age: number
  sex: string
}

export const globalStore = defineStore('globalStore', {
  state() {
    const userInfo: UserInfo = reactive({
      name: 'zhaojian',
      age: 23,
      sex: '男'
    })

    const changeUserInfo = () => {
      userInfo.name = 'xiaojin'
    }

    return { userInfo, changeUserInfo }
  },
  persist: {
    storage: localStorage,
    paths: ['userInfo'],
    key: 'userInfo'
  }
})
