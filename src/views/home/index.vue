<script lang="ts" setup>
import { ref } from 'vue'
const loading = ref<boolean>(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<template>
  <section>
    <h3 class="title">hello world</h3>
  </section>
</template>

<style lang="less" scoped>
section {
  width: 100%;
  height: 100%;
  padding: 32px;

  .title {
    color: #323232;
    text-align: center;
  }
}
</style>
