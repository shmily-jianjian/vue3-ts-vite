<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { themeStore } from '../store/modules/theme'

const { checkTheme } = themeStore()
const { theme } = storeToRefs(themeStore())

const value = computed(() => (theme.value === null ? '浅色' : '深色'))
</script>

<template>
  <n-button quaternary type="primary" @click="checkTheme">
    {{ value }}
  </n-button>
</template>
