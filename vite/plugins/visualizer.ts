import { visualizer } from 'rollup-plugin-visualizer'

/**
 * @description 创建可视化插件(查看chunk大小)
 * @returns
 */
export default function createVisualizer() {
  return visualizer({
    open: true,
    gzipSize: true
  })
}
