<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from '@/config/theme'
import { themeStore } from './store/modules/theme'
import { storeToRefs } from 'pinia'

const { theme } = storeToRefs(themeStore())
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<style></style>
