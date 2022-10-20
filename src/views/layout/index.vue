<template>
  <n-layout>
    <n-layout-header bordered>
      <header-wrap />
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        style="height: calc(100vh - 48px)"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
        />
      </n-layout-sider>
      <n-layout> <router-view></router-view></n-layout>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { BlockOutlined, AppstoreAddOutlined, BankOutlined } from '@vicons/antd'
import HeaderWrap from '@/components/HeaderWrap.vue'
import { renderIcon, renderMenuLabel } from '@/utils/layout'

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    path: '/login',
    key: 'hear-the-wind-sing',
    icon: renderIcon(AppstoreAddOutlined)
  },
  {
    label: '1973年的弹珠玩具',
    path: '/detail',
    key: 'pinball-1973',
    icon: renderIcon(BankOutlined),
    children: [
      {
        label: '鼠',
        path: '/detail',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    path: '/home',
    icon: renderIcon(BlockOutlined)
  }
]
</script>

<style lang="less" scoped>
.n-layout-header {
  height: 48px;
}
</style>
