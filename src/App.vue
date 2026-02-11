<template>
  <div id="app" class="app">
    <lottery v-if="!isShowGift" @showGift="showGift" />
    <gift v-else />
  </div>
</template>

<script>
import { GLOBAL_KEYS } from './gift.setting.js';

export default {
  name: 'App',
  components: {
    Lottery: () => import('./components/Lottery.vue'),
    Gift: () => import('./components/Gift.vue'),
  },
  data() {
    return {
      isShowGift: false,
    };
  },
  methods: {
    checkLocalGift() {
      const hasGift = localStorage.getItem(GLOBAL_KEYS.EXIST_KEY);
      if (hasGift) this.isShowGift = true;
    },
    showGift() {
      this.isShowGift = true;
    },
  },
  created() {
    this.checkLocalGift();
  },
};
</script>

<style>
/* ✅ 全局正常中文字体 + 稍微小一点字号 */
html, body {
  margin: 0;
  padding: 0;
  font-size: 15px;      /* 你觉得还大就改 14 */
  line-height: 1.55;    /* 防止文字挤在一起 */
}

#app {
  min-height: 100vh;
}

.app {
  /* ✅ 系统中文字体（iPhone/安卓/Windows 都正常） */
  font-family: -apple-system, BlinkMacSystemFont,
    "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;

  /* ✅ 关键：不要用 height:100vh + overflow:hidden 把内容“裁掉/挤压” */
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  /* ✅ 给底部留空间，避免“最终解释权”之类的东西贴底覆盖正文 */
  padding-bottom: calc(80px + env(safe-area-inset-bottom));

  background-image: url(./assets/images/bg.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* ✅ 可选：标题整体稍微收一点（不一定命中，但有就会生效） */
h1 { font-size: 32px; line-height: 1.15; margin: 18px 0 10px; }
h2 { font-size: 20px; line-height: 1.2; margin: 12px 0 8px; }
p  { margin: 10px 0; }
</style>
