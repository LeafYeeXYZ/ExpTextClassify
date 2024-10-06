import htmlButtonResponse from '@jspsych/plugin-html-button-response'

// 被试间变量: 材料性质 (human: 非AI生成, ai: AI生成)
// 被试内变量: 先验概率 (human: 20%AI生成, balanced: 50%AI生成, ai: 80%AI生成, random: 随机)
// 任务: 二分类任务 (AI生成, 非AI生成)
// 实验分为 4 个 block, 每个 block 有 20 个 trial
// 每个 block 开始前显示先验概率, 每个 block 结束后强制休息 10 秒

export const mainTrails: any[] = [
  {
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <img src="/demo.jpg" class="w-3/4 h-fit max-w-md" />
      </div>
    `,
    choices: ['人类绘制', 'AI生成'],
  },
]