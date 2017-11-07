<template>
  <div class="footer">
    <router-link
      :key="item.link"
      :to="item.link"
      v-for="item in tabBarList"
      class="footer-item">
      <i :class="item.icon+' iconfont'"></i>
      <span class="foot-text">
        {{item.text}}
      </span>
    </router-link>
  </div>
</template>
<script>
  export default {
    components: {},
    props: {},
    beforeCreate() {
    },
    created() {
    },
    mounted() {

    },
    data() {
      return {
        tabBarList: [
          {
            link: '/watch',
            text: '关注',
            icon: 'icon-guanzhu',
          }, {
            link: '/index',
            text: '发现',
            icon: "icon-guanzhu1",
          }, {
            link: '/write',
            text: '写文章',
            icon: "icon-xie",
          }, {
            link: '/news',
            text: '消息',
            icon: "icon-xiaoxi",
          }, {
            link: '/me',
            text: '我的',
            icon: "icon-wode",
          },
        ]
      }
    },
    methods: {},
    computed: {},
    filters: {},

  }
</script>
<style lang="scss" scoped>
  .footer {
    display: flex;
    border: {
      top: .5px solid #eee;
    }
    &-item {
      flex: 1;
      .iconfont {
        display: block;
        font-size: 20px;
        margin-top: 4px;
      }
      color: #333;
    }
    .foot-text {
      font-size: 12px;
    }

    .router-link-active {
      color: red;
    }
  }
</style>
<style>

</style>
