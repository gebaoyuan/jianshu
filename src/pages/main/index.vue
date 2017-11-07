<template>
  <div class="main">
    <div class="main-container">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="main-right-container" :key="$route.path"></router-view>
      </keep-alive>
      <router-view v-else class="main-right-container" :key="$route.path"></router-view>
    </div>
    <ge-foot class="footer"></ge-foot>
  </div>
</template>
<script>
  import geAside from './aside.vue';
  import GeFoot from './foot.vue';
  import geHead from './head.vue';

  export default {
    components: {geAside, GeFoot,},
    props: {},
    beforeCreate() {
    },
    created() {
    },
    mounted() {

    },
    data() {
      return {}
    },
    methods: {},
    computed: {},
    filters: {},

  }
</script>
<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 50px;
    position: relative;
    .footer{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50px;
    }
  }
</style>
<style lang="scss">
  .main-header {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;

  }

  .main-container {

    height: 100%;
    &.act {
      padding-left: 200px;
    }
    position: relative;
    overflow: hidden;
  }

  .main-right-container {
    overflow: auto;
    height: 100%;
  }

  .main-aside {
    width: 200px;
    background: yellow;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow-y: auto;
  }
</style>
