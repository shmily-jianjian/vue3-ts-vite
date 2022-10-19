<script lang="ts" setup>
import { Login } from '@/api'
import { message } from '@/config'
import type { FormInst } from 'naive-ui'
import { ref } from 'vue'
import { globalStore } from '@/store/modules/global'
import { useRouter } from 'vue-router'

const rules = {
  userName: {
    required: true,
    trigger: 'blur',
    message: '请输入用户名'
  },
  passWorld: {
    required: true,
    trigger: 'blur',
    message: '请输入密码'
  }
}

const formRef = ref<FormInst | null>(null)
const formValue = ref({
  userName: '',
  passWorld: ''
})
const loading = ref<boolean>(false)
const store = globalStore()
const router = useRouter()

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(async errors => {
    if (!errors) {
      loading.value = true
      try {
        const res = await Login({
          userName: formValue.value.userName,
          passWorld: formValue.value.passWorld
        })
        if (res.code === 0) {
          store.saveToken(res.data.token)
          message.success('登录成功')
          router.replace('/')
        }
      } finally {
        loading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="loginWrap">
    <div class="loginBox">
      <header>欢迎登录 统一个人管理平台</header>
      <main>
        <n-form ref="formRef" :model="formValue" :rules="rules">
          <n-form-item path="userName">
            <n-input
              v-model:value="formValue.userName"
              placeholder="用户名: admin / user"
              clearable
            />
          </n-form-item>
          <n-form-item path="passWorld">
            <n-input
              v-model:value="formValue.passWorld"
              type="password"
              placeholder="密码: 123456"
              clearable
            />
          </n-form-item>
          <n-form-item>
            <n-button
              :loading="loading"
              type="primary"
              block
              @click="handleValidateClick"
            >
              登录
            </n-button>
          </n-form-item>
        </n-form>
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
.loginWrap {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/login_box_bg.png');
  background-size: cover;
  position: relative;

  .loginBox {
    width: 368px;
    padding: 48px;
    border-radius: 8px;
    position: absolute;
    top: 25%;
    right: 14%;
    background-color: #fff;

    header {
      width: 240px;
      font-family: FZLanTingHeiS-DB-GB;
      font-size: 30px;
      line-height: 48px;
      color: #005ce6;
      word-break: keep-all;
      margin-bottom: 30px;
      font-weight: 400;
    }
  }
}
</style>
