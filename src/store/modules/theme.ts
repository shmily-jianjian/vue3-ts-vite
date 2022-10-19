import { ref } from 'vue'
import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

export const themeStore = defineStore('themeStore', () => {
  const theme = ref<GlobalTheme | null>(null)
  // const theme = ref(null)

  const checkTheme = () => {
    theme.value = theme.value === null ? darkTheme : null
  }

  return { theme, checkTheme }
})
