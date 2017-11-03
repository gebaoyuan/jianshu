<template>
  <div class="main">
    <ge-head class="main-header"></ge-head>
    <div class="main-container">
      <ge-aside class="main-aside"></ge-aside>
      <router-view class="main-right-container"></router-view>
    </div>

  </div>
</template>
<script>
  import geAside from './aside.vue';
  import foot from './foot.vue';
  import geHead from './head.vue';

  export default {
    components: {geAside, foot, geHead},
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
<style scoped>
  .main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 50px;
    position: relative;
  }
</style>
<style>
  .main-header {
    width: 100%;
    height: 50px;
    background: red;
    position: absolute;
    top: 0;
    left: 0;

  }

  .main-container {
    height: 100%;
    padding-left: 200px;
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
