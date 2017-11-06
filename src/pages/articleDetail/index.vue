<template>
  <div>
    <div v-html="test"></div>
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
    updated() {
      console.log('updated');
    },
    mounted() {
      this.$ajax.getArticleDetail(this.$route.params.id)
        .then(res => {
          console.log(res);
          this.test = res.data;
        })
    },
    data() {
      return {
        test:'',
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

</style>
