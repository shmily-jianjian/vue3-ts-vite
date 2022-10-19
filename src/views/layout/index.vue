<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
        />
      </n-layout-sider>
      <n-layout>
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import { h, ref, withModifiers } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ProjectFilled, DownOutlined } from '@vicons/antd'

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: '/login'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: false,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        label: '叙事者',
        key: '1'
      },
      {
        label: '羊男',
        key: 'sheep-ma1n'
      },
      {
        label: '食物',
        key: 'food1',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const collapsed = ref(false)
const router = useRouter()
const renderMenuLabel = (option: MenuOption) => {
  if ('href' in option) {
    return h(
      'span',
      {
        onClick: withModifiers(() => {
          router.push(option.href as string)
        }, ['stop', 'prevent'])
      },
      option.label as string
    )
  }
  return option.label as string
}
const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === 'sheep-man') return true
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food') return null
  return h(NIcon, null, { default: () => h(ProjectFilled) })
}
const expandIcon = () => {
  return h(NIcon, null, { default: () => h(DownOutlined) })
}
</script>
