<script lang="ts" setup>
import CheckTheme from '@/components/CheckTheme.vue'
</script>

<template>
  <header class="headerWrap flex">
    <div class="headerLeft flex">logo</div>
    <div class="headerRight flex">
      <check-theme />
    </div>
  </header>
</template>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}

.headerWrap {
  height: 100%;
}
.headerLeft {
  width: 240px;
  height: 100%;
  justify-content: center;
  background-color: skyblue;
}

.headerRight {
  flex: 1;
  height: 100%;
  background-color: skyblue;
  justify-content: flex-end;
  padding-right: 20px;
}
</style>
