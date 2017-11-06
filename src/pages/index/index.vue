<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    class="article-warp"
  >
    <my-article
      :key="article.object.data.id"
      v-for="article in articleList"
      :article="article"></my-article>
    <loading v-show="busy"></loading>
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
      this.getArticleList();
    },
    data() {
      return {
        articleList: [],
        busy: true,
        curPage: 1,
        noteIds: [],
      }
    },
    methods: {
      ...mapMutations('createTimeTable', ['setState']),
      loadMore() {
        this.busy = true;//关闭滚动加载
        this.curPage++;
        this.getArticleList();
      },
      getArticleList(errorCb) {
        this.$ajax.getArticleList({
          page: this.curPage,
          count: 15,
          note_ids: this.noteIds
        })
          .then(({code, msg, data}) => {
            if (!code) {
              this.articleList.push(...data);
              data.map(item => {
                this.noteIds.push(item.object.data.id)
              })
              //请求完成 开启滚动加载
              this.$nextTick(() => {
                this.busy = false;
              });
            }
          })
          .catch(errorCb)
      }
    },
    computed: {},
    filters: {},

  }
</script>
<style scoped>

</style>
<style lang="scss">
  .article-warp {
    background: #f5f5f5;
  }
</style>
