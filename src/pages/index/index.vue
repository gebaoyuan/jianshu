<template>
  <div class="article-warp">
    <my-article
      :key="article.object.data.id"
      v-for="article in articleList"
      :article="article"></my-article>
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
      this.$ajax.getArticleList({
        page: 1,
        count: 15
      })
        .then(({code, msg, data}) => {
          if (!code) {
            this.articleList = data;
          }
        })
    },
    data() {
      return {
        articleList: []
      }
    },
    methods: {
      ...mapMutations('createTimeTable', ['setState'])
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
