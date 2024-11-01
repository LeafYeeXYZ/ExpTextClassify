import htmlButtonResponse from '@jspsych/plugin-html-button-response'
import { HUMAN_STIMULUS } from '../stimulus/human'
import { AI_STIMULUS } from '../stimulus/ai'

// 被试间变量: 材料性质 (human: 非AI生成, ai: AI生成)
// 被试内变量: 先验概率 (more_human: 20%AI生成, balance: 50%AI生成, more_ai: 80%AI生成, random: 随机)
// 任务: 二分类任务 (AI生成, 非AI生成)
// 实验分为 4 个 block, 每个 block 有 10 个 trial
// 每个 block 开始前显示先验概率, 每个 block 结束后强制休息 10 秒
// 被试内变量用“难度逐渐提升”来提高表面效度

function getTrail(text: string, percentage: string): any {
  return {
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <p>${text}</p>
      </div>
    `,
    choices: ['AI写的', '人类写的'],
    data: { percentage },
  }
}

export function getMainTrails(MATERIAL: 'ai' | 'human'): any[] {
  const src = MATERIAL === 'ai' ? AI_STIMULUS : HUMAN_STIMULUS
  src.sort(() => Math.random() - 0.5)
  const trails: any[] = []
  // 第一个 block 的开始语言
  trails.push({
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <p>实验的第一部分即将开始!</p>
        <p>第一部分会比较简单, 10段内容中只有<b>2</b>段是AI生成的</p>
        <p>请试着找出这<b>2</b>段的AI生成内容吧!</p>
      </div>
    `,
    choices: ['继续'],
  })
  for (let i = 0; i < 10; i++) {
    trails.push(getTrail(src[i], 'more_human'))
  }
  // 第二个 block 的开始语言
  trails.push({
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <p>辛苦啦! 第二部分即将开始</p>
        <p>第二部分会稍微困难一点, 10段内容中有<b>5</b>段是AI生成的</p>
        <p>请试着找出这<b>5</b>段的AI生成内容吧!</p>
      </div>
    `,
    choices: ['继续'],
  })
  for (let i = 10; i < 20; i++) {
    trails.push(getTrail(src[i], 'balance'))
  }
  // 第三个 block 的开始语言
  trails.push({
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <p>真厉害! 第三部分我们上上强度!</p>
        <p>第三部分的10段内容中有<b>8</b>段是AI生成的</p>
        <p>请试着找出这<b>8</b>段的AI生成内容吧!</p>
      </div>
    `,
    choices: ['继续'],
  })
  for (let i = 20; i < 30; i++) {
    trails.push(getTrail(src[i], 'more_ai'))
  }
  // 第四个 block 的开始语言
  trails.push({
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <p>最后一部分, 加油!</p>
        <p>最后一部分的10段内容中AI生成的比例是<b>随机</b>的</p>
        <p>你的火眼金睛能分辨出人类和AI吗</p>
      </div>
    `,
    choices: ['继续'],
  })
  for (let i = 30; i < 40; i++) {
    trails.push(getTrail(src[i], 'random'))
  }
  return trails
}
