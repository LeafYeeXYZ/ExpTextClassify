import './tailwind.css'
import 'jspsych/css/jspsych.css'
import { initJsPsych, type JsPsych } from 'jspsych'
import preload from '@jspsych/plugin-preload'
import { openingTrails } from './trails/opening'
import { mainTrails } from './trails/main'
import { endingTrails } from './trails/ending'

const exp: JsPsych = initJsPsych({
  show_progress_bar: true,
  message_progress_bar: '实验进度'
})
const timeline: any[] = [
  { type: preload, auto_preload: true, message: '<div class="text-2xl">实验加载中, 请稍等...</div>' },
  ...openingTrails,
  ...mainTrails,
  ...endingTrails,
]

void async function main() {
  try {

    // 运行实验
    await exp.run(timeline)
    // 显示正在上传数据页面
    document.body.innerHTML = `
      <div class="flex flex-col items-center justify-center h-dvh w-dvw overflow-hidden">
        <div class="text-2xl p-4">正在上传数据, 请稍等...</div>
      </div>
    `
    // 获取并处理实验数据
    const data = exp.data.get().values()
    console.log(data)
    // 上传数据
    await new Promise(resolve => setTimeout(resolve, 800))
    // 显示感谢页面
    document.body.innerHTML = `
      <div class="flex flex-col items-center justify-center h-dvh w-dvw overflow-hidden">
        <div class="text-2xl p-4">实验已结束, 感谢您的参与!</div>
        <div class="text-base p-4">如有疑问, 请联系主试: xiaoyezi@leafyee.xyz</div>
      </div>
    `

  } catch (error) {
    // 显示错误信息
    document.body.innerHTML = `
      <div class="flex flex-col items-center justify-center h-dvh w-dvw overflow-hidden">
        <div class="text-2xl p-4">实验发生错误, 请联系管理员!</div>
        <div class="text-base p-4">错误信息: ${error instanceof Error ? error.message : JSON.stringify(error)}</div>
        <div class="text-base p-4">请将错误信息发送给主试: xiaoyezi@leafyee.xyz</div>
      </div>
    `
  }
}()