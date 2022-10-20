import { RouterLink } from 'vue-router'
import type { MenuGroupOption, MenuOption } from 'naive-ui'
import { h, Component } from 'vue'
import { NIcon } from 'naive-ui'

export const renderMenuLabel = (option: MenuOption | MenuGroupOption) => {
  if (option.children?.length) {
    return option.label as string
  }
  return h(
    RouterLink,
    {
      to: option.path as string
    },
    { default: () => '回家' }
  )
}

export const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const expandIcon = (icon: Component) => {
  return h(NIcon, null, { default: () => h(icon) })
}
