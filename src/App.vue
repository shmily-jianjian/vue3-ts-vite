<script setup lang="ts">
import { ref } from 'vue'
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { globalStore } from '@/store/modules/global'
import { getMovies } from '@/api/test'

const theme = ref<GlobalTheme | null>(null)

const store = globalStore()
const { changeUserInfo } = store
const { userInfo } = storeToRefs(store)
const movies = ref()

const requestData = async () => {
  const res = await getMovies()
  movies.value = res.data.hot
}
const inputValue = ref(0)
const timestamp = ref(1183135260000)
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <span>姓名: {{ userInfo.name }}</span>
    <span>年龄: {{ userInfo.age }}</span>
    <span>性别: {{ userInfo.sex }}</span>
    <n-button type="tertiary" @click="changeUserInfo"> 修改姓名 </n-button>
    <n-tag type="success" @click="theme = null">亮色</n-tag>
    <n-tag type="success" @click="theme = darkTheme">暗色</n-tag>
    <n-input-number v-model:value="inputValue" clearable />
    <n-date-picker v-model:value="timestamp" type="date" />
    <n-global-style />
    <n-button type="success" @click="requestData">请求电影</n-button>
    <main>电影: {{ JSON.stringify(movies) }}</main>
  </n-config-provider>
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
