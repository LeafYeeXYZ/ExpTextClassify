import htmlButtonResponse from '@jspsych/plugin-html-button-response'

export const endingTrails: any[] = [
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择自己是否认真实验', // 委婉一点, 用一些降低威胁性的手段
    choices: ['是', '否'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择自己是否第一次进行本实验',
    choices: ['是', '否'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择是否愿意上传实验数据', // 包括委婉地告诉猜到了实验目的的被试不要上传数据
    choices: ['是', '否'],
  },
]