import path from 'path'
import { type ConfigEnv, defineConfig, loadEnv, type UserConfig } from 'vite'
import createVitePlugins from './vite/plugins'

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const isProd = mode === 'production'
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: createVitePlugins(env, isProd),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
