import htmlButtonResponse from '@jspsych/plugin-html-button-response'

export const endingTrails: any[] = [
  {
    type: htmlButtonResponse,
    stimulus: `
      <div class="mb-6 flex flex-col items-center justify-center overflow-hidden">
        <p>感谢您的参与!</p>
        <p>最后, 我们有三个小问题想要请您回答</p>
        <p>为了保证试验数据的准确性, 恳请您如实选择</p>
      </div>
    `,
    choices: ['继续'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择自己是否认真实验<br />委婉一点, 用一些降低威胁性的手段',
    choices: ['是', '否'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择自己是否第一次进行本实验',
    choices: ['是', '否'],
  },
  {
    type: htmlButtonResponse,
    stimulus: '这里将让被试选择是否愿意上传实验数据<br />包括委婉地告诉猜到了实验目的的被试不要上传数据',
    choices: ['是', '否'],
  },
]