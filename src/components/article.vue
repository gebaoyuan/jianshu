<template>
  <div class="art-item-wrap">
    <div class="author">
      <a href="">
        <img :src="mainArticle.user.avatar" class="author-icon">
      </a>
      <a href="" class="author-name"> {{mainArticle.user.nickname}}</a>
    </div>
    <div class="poster-img"
         v-if="mainArticle.list_image_url"
         :style="{'background-image':'url('+mainArticle.list_image_url +')'}">
    </div>
    <div class="art-title">
      {{mainArticle.title}}
    </div>
    <div class="art-contain">
      {{mainArticle.public_abbr}}
    </div>

    <div class="art-mate">
      <a href="" class="collection-tag">
        {{mainArticle.important_collection.title}}
      </a>
      {{artInterText}}
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    props: ['article'],
    creted() {
    },
    mounted() {
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      mainArticle() {
        return this.article.object.data;
      },
      artInterText() {
        var text = [],
          mainArticle = this.mainArticle;
        if (mainArticle.public_comments_count) {
          text.push(mainArticle.public_comments_count + "评论 ");
        }
        if (mainArticle.likes_count) {
          text.push(mainArticle.likes_count + "喜欢 ");
        }
        if (mainArticle.total_rewards_count) {
          text.push(mainArticle.total_rewards_count + "赞赏");
        }

        return text.join('· ');
      }
    },
    filters: {},
  }
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
  a {
    text-decoration: none;
  }

  .art-item-wrap {
    padding: 15px 10px;
    background: #fff;
    margin: {
      top: 5px;
    }
    text-align: left;
    .author {
      $h: 32px;
      $h_author: 34px;
      height: $h_author;
      padding: {
        left: $h + 6px;
      }
      position: relative;
      &-icon {
        position: absolute;
        top: 0;
        left: 0;
        width: $h;
        height: $h;
        border: ($h_author -$h)/2 solid #f0f0f0;
        border-radius: 50%;
      }
      &-name {
        line-height: $h_author;
        text-decoration: none;
        color: #666;
      }
    }

    .poster-img {
      height: 120px;
      margin: 10px 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }

    .art-title {
      font-size: 20px;
      margin: 10px 0 0;
      font-weight: 400;
      line-height: 1.4;
      color: #333;

    }

    .art-contain {
      margin: 7px 0 0;
      font-size: 15px;
      color: #3f3f3f;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .art-mate {
      margin: 12px 0 0;
      font-size: 14px;
      color: #999;
      white-space: nowrap;
      text-align: right;
      .collection-tag {
        position: relative;
        float: left;
        padding: 5px 8px;
        margin-right: 10px;
        font-size: 13px;
        line-height: 1;
        color: #ea6f5a;
        border: 1px solid #ea6f5a;
      }
    }

  }
</style>
