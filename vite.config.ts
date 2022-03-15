import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 公共基础路径，默认 /
  // 开发服务器选项
  server: {
    port: 3000, // 设置启动端口号，
    open: false, // boolean | string 设置服务启动时是否自动打开浏览器，当此值是一个字符串时，会被用作 URL 的路径名。
    cors: true, // 为开发服务器配置 CORS，配置为允许跨域

    // 设置代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: false, // 支持 https
        rewrite: path => path.replace(/^api/, '')
      }
    },
  },
  // 配置别名
  resolve: {
    alias: {
      '@': pathResolve('./src'),  // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'), // 设置 `views` 指向 `./src/views` 目录，下同
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    },
  },
  // 构建选项
  build: {
    outDir: 'dist',   // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      compress: {
        keep_infinity: true,  // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true,   // 生产环境去除 console
        drop_debugger: true   // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500   // chunk 大小警告的限制（以 kbs 为单位）
  }
})
