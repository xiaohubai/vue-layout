import { loadEnv } from 'vite'
import { resolve } from 'path'
import vuePlugin from '@vitejs/plugin-vue'
import legacyPlugin from '@vitejs/plugin-legacy'
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    server: {
      port: env.VITE_CLI_PORT || 8080,
      open: false,
      cors: true,
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_BASE_URL, // http://127.0.0.1:8888
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + env.VITE_BASE_API), '')
        }
      },
      build: {
        manifest: false, // 是否产出maifest.json
        sourcemap: false, // 是否产出soucemap.json
        outDir: 'dist', // 产出目录
        chunkSizeWarningLimit: 2000, // 消除打包大小超过2000kb警告
      }
    },
    plugins: [
      legacyPlugin({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15']
      }),
      vuePlugin(),
      viteMockServe({
        supportTs: false,
        mockPath: 'mock',
        // localEnabled: command === 'dev',
        logger: true
      })
    ]
  }
}
