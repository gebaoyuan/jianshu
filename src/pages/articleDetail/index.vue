<template>
  <div>
    <div v-html="articleContainer" class="container note"></div>
  </div>
</template>
<script>
  import {mapMutations, mapActions} from 'vuex';
  import MyArticle from '../../components/article.vue'

  export default {
    components: {MyArticle},
    props: {},
    beforeCreate() {

    },
    created() {

    },
    mounted() {
      this.$ajax.getArticleDetail(this.$route.params.id)
        .then(({data, code, msg}) => {
          if (!code) {
            this.articleData = data;
            this.articleContainer = data.article.contain
          }
        })
    },
    data() {
      return {
        test: '',
        articleData: '',
        articleContainer: ''
      }
    },
    methods: {
      ...mapMutations('createTimeTable', ['setState']),

    },
    computed: {},
    filters: {},

  }
</script>
<style scoped>

</style>
<style lang="scss">
  .container {
    padding: 12px 18px 0;
    a {
      text-decoration: none;
    }
    p {
      margin: 0 0 25px;
    }
    hr {
      margin: 0 0 20px;
      border-top: 1px solid #ddd;
    }
    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
      border: 0;
      cursor: -webkit-zoom-in;
      transition: all .25s ease-in-out;
    }
    h3 {
      font-size: 22px;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0 0 15px;
      font-weight: 700;
      color: #2f2f2f;
      line-height: 1.7;
      text-rendering: optimizelegibility;
    }
  }

  .note {
    .title {
      margin: 15px 0;
      font-size: 30px;
      font-weight: 700;
      font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      color: #2f2f2f;
      word-break: break-word !important;
      word-break: break-all;
      line-height: 1.4;
    }
    .author {
      margin-bottom: 20px;
      font-size: 13px;
      color: #b1b1b1;
      text-align: left;
      .avatar {
        vertical-align: middle;
        display: inline-block;
        line-height: 1;
        img {
          width: 34px;
          height: 34px;
          border-radius: 17px;
          margin-right: 10px;
        }
      }
      .info {
        display: inline-block;
        vertical-align: middle;
        .name {
          margin-right: 3px;
          font-size: 16px;
          vertical-align: middle;
          a {
            margin: 0 5px;
            font-size: 16px;
            font-weight: 700;
            color: #484848;
            display: inline-block;
            vertical-align: middle;

          }
        }
        .meta {
          margin-top: 5px;
          font-size: 12px;
          color: #969696;
        }
        img {
          margin-top: -3px;
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
    .show-content {
      color: #2f2f2f;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      blockquote {
        padding: 20px;
        margin-bottom: 25px;
        background-color: #f7f7f7;
        border-left: 6px solid #b4b4b4;
        word-break: break-word!important;
        word-break: break-all;
        line-height: 30px;
      }
    }
  }

</style>
