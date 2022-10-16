<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { globalStore } from '@/store/modules/global'

const store = globalStore()
const { changeUserInfo } = store
const { userInfo } = storeToRefs(store)
</script>

<template>
  <span>姓名: {{ userInfo.name }}</span>
  <span>年龄: {{ userInfo.age }}</span>
  <span>性别: {{ userInfo.sex }}</span>
  <button @click="changeUserInfo">修改姓名</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
