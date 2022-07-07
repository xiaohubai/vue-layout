import * as ElIconModules from '@element-plus/icons'

const config = {
  appName: '风控与分析平台',
  appLogo: 'https://www.gin-vue-admin.com/img/logo.png'
}

export default {
  install: (app) => {
    // 统一注册el-icon图标
    for (const iconName in ElIconModules) {
      app.component(iconName, ElIconModules[iconName])
    }
    app.config.globalProperties.$configs = config
  },
  config
}
