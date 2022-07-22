<template>
  <div id="userLayout">
    <div class="login_panle">
      <div class="login_panle_form">
        <div class="login_panle_form_title">
          <img class="login_panle_form_title_logo" :src="$configs.appLogo" alt>
          <p class="login_panle_form_title_p">{{ $configs.appName }}</p>
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="rules" @keyup.enter="submitForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名">
              <template #suffix>
                <span class="input-icon">
                  <el-icon>
                    <user />
                  </el-icon>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" :type="lock === 'lock' ? 'password' : 'text'" placeholder="请输入密码">
              <template #suffix>
                <span class="input-icon">
                  <el-icon>
                    <component :is="lock" @click="changeLock" />
                  </el-icon>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item style="position: relative" prop="captcha">
            <el-input v-model="loginForm.captcha" name="captcha" placeholder="请输入验证码" style="width: 60%" />
            <div class="vPic">
              <img v-if="picPath" :src="picPath" alt="请输入验证码" @click="loginCaptcha()">
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 46%" @click="submitForm">登 录</el-button>
            <el-button type="primary" style="width: 46%; margin-left: 8%" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login_panle_right" />
    </div>
  </div>
</template>
<script>
import { captcha } from '@/api/user'
export default {
  name: 'Login',
  data() {
    const checkUsername = (rule, value, callback) => {
      if (value.length < 5) {
        return callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (value.length < 6) {
        return callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    return {
      lock: 'lock',
      loginForm: {
        username: 'admin',
        password: '123456',
        captcha: '',
        captchaId: ''
      },
      rules: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: checkPassword, trigger: 'blur' }],
        captcha: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
      },
      captcha: '',
      picPath: ''
    }
  },
  created() {
    this.loginCaptcha()
  },
  methods: {
    async register() {
      this.$router.push({ name: 'Register' })
    },
    async submitForm() {
      this.$refs.loginForm.validate(async (v) => {
        if (v) {
          const flag = await this.$store.dispatch('user/Login', this.loginForm)
          if (flag) {
            this.$router.push({ name: this.$store.getters['user/userInfo'].defaultRouter })
            return true
          }
        }
        this.$message({
          type: 'error',
          message: '请正确填写登录信息',
          showClose: true
        })
        this.loginCaptcha()
        return false
      })
    },
    changeLock() {
      this.lock = this.lock === 'lock' ? 'unlock' : 'lock'
    },
    loginCaptcha() {
      captcha({}).then((resp) => {
        this.rules.captcha.max = resp.data.pic_length_max
        this.rules.captcha.min = resp.pic_length_min
        this.picPath = resp.data.pic_path
        this.loginForm.captchaId = resp.data.captcha_id
      })
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/style/newLogin.scss";
</style>
