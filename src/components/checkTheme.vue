<script setup lang="ts">
import { themeStore } from '../store/modules/theme'

const { checkTheme } = themeStore()
</script>

<template>
  <n-switch @click="checkTheme">
    <template #checked> 深色 </template>
    <template #unchecked> 浅色 </template></n-switch
  >
</template>
