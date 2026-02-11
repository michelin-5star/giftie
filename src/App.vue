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
    }
  },

  methods: {
    checkLocalGift() {
      const hasGift = localStorage.getItem(GLOBAL_KEYS.EXIST_KEY);
      if (!!hasGift === true) {
        this.isShowGift = true;
      }
    },

    showGift() {
      this.isShowGift = true;
    },
  },
  
  created() {
    this.checkLocalGift();
  },

  mounted() {},
};
</script>

<style>
.app {
  /* ✅ 改成系统中文字体（手机/电脑都会正常好看） */
  font-family: -apple-system, BlinkMacSystemFont,
    "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  background-image: url(./assets/images/bg.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
