
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '老婆咪的Valentine小礼物抽奖～',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '骚瑞老公情人节不能陪在老婆身边，但是老公特别想你特别爱你的！', },
    { key: 's', wording: '所以请老婆抽个小奖以作为延期约会的补偿', },
    { key: 'd', wording: 'Will you be my Valentine？好嘛好嘛', },
  ],
  // 最终解释权归属人
  owner: '老公宝包',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'Meshki/PPMY裙裙一件', alias: '裙裙', image: '/images/1.jpg',  description: '「老婆喜欢漂亮裙裙」' },
  { key: 'w', name: '老公的一百个亲亲券', alias: '亲亲', image: '/images/2.jpg',  description: '“老公亲亲！”' },
  { key: 'e', name: 'Sephora购物一次', alias: 'Sephora', image: '/images/3.jpg',  description: '「美美老婆～」' },
  { key: 'r', name: '北加州getaway trip一次', alias: '旅行～', image: '/images/6.jpg',  description: '“人称小bora bora”' },
  { key: 't', name: '豪华晚餐约会+1', alias: '约会～', image: '/images/5.jpg',  description: '「吃大肉噜！！！」' },
  { key: 'y', name: '再买一份花花～', alias: '花花', image: '/images/6.jpg',  description: '“给老婆订漂亮花花～不算情人节的哦”' },
  { key: 'u', name: 'Rhode最新单品一份', alias: 'Rhode', image: '/images/7.jpg',  description: '“即便老婆已经有8个一模一样的蛋噜”' },
  { key: 'i', name: '钻石一颗', alias: '钻石', image: '/images/8.jpg',  description: '「一颗恒久远～给老婆做项链（先搞个小一点的不要让老公破产捏）」' },
];
