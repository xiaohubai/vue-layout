<template>
  <div id="userLayout">
    <el-button type="primary" style="width: 46%" @click="loginVerify">前往初始化</el-button>
  </div>
</template>
<script>

import { captcha } from '@/api/user'

export default {
  methods: {
    loginVerify() {
      captcha()
    }
  }
}

</script>

