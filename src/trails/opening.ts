import htmlButtonResponse from '@jspsych/plugin-html-button-response'

export const openingTrails: any[] = [
  {
    type: htmlButtonResponse,
    stimulus: '这里将显示开始指导语',
    choices: ['继续'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '本部分将收集一些人口学信息',
    choices: ['继续'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将显示正式实验指导语',
    choices: ['继续'],
  },
]