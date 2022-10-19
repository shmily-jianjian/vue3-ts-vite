<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from '@/config/theme'
import checkTheme from './components/checkTheme.vue'
import { themeStore } from './store/modules/theme'
import { storeToRefs } from 'pinia'

const { theme } = storeToRefs(themeStore())
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="theme">
    <div class="wrap">
      <checkTheme class="checkTheme" />
      <n-global-style />
      <router-view></router-view>
    </div>
  </n-config-provider>
</template>
