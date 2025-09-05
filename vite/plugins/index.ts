import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { type PluginOption } from 'vite'
import createCompression from './compression'
import createVisualizer from './visualizer'

interface ImportMetaEnv {
  [key: string]: string | boolean | undefined
}

/**
 * @description 创建vite插件配置
 * @param viteEnv  vite环境变量
 * @param isProd  是否是生产环境
 */
export default function createVitePlugins(
  _viteEnv: ImportMetaEnv,
  isProd: boolean
): PluginOption[] {
  const vitePlugins = [
    react(),
    tailwindcss(),

    // 构建和优化相关
    createCompression(isProd)
  ]
  if (isProd) {
    vitePlugins.push(createVisualizer())
  }
  return vitePlugins as PluginOption[]
}
