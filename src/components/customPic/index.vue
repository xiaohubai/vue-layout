<template>
  <span class="headerAvatar">
    <template v-if="picType === 'avatar'">
      <el-avatar v-if="userInfo.headerImg" :size="24" :src="avatar" />
      <el-avatar v-else :size="24" :src="require('@/assets/noBody.png')" />
    </template>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
const path = import.meta.env.VITE_BASE_API
export default {
  name: 'CustomPic',
  props: {
    picType: {
      type: String,
      required: false,
      default: 'avatar'
    },
    picSrc: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      path: path + '/'
    }
  },
  computed: {
    ...mapGetters('user', ['userInfo']),
    avatar() {
      if (this.picSrc === '') {
        if (this.userInfo.headerImg !== '' && this.userInfo.headerImg.slice(0, 4) === 'http') {
          console.log(this.userInfo.headerImg.slice(0, 4))
          return this.userInfo.headerImg
        }
        return this.path + this.userInfo.headerImg
      } else {
        if (this.picSrc !== '' && this.picSrc.slice(0, 4) === 'http') {
          return this.picSrc
        }
        return this.path + this.picSrc
      }
    }
  }
}
</script>

<style scoped>
.headerAvatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
</style>
