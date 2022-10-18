<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from '@/config/theme'
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>
