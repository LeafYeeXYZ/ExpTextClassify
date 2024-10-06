import htmlButtonResponse from '@jspsych/plugin-html-button-response'

export const endingTrails: any[] = [
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择自己是否认真实验',
    choices: ['是', '否'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择自己是否第一次进行本实验',
    choices: ['是', '否'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择是否愿意上传实验数据',
    choices: ['是', '否'],
  },
]