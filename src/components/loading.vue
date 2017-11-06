<template>
  <div class="loading">
    <figure class="loading">
      <section class="loading-item-wrap" v-for="index in 8">
        <div class="loading-item"></div>
      </section>

    </figure>  加载中...
  </div>
</template>
<script>
  export default {
    components: {},
    props: {},
    creted() {
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
<style lang="scss" scoped>

</style>
<style lang="scss">
  .loading{
    line-height:40px;
    height: 40px;
  }
  figure.loading {
    vertical-align: middle;
    $w: 40px;
    width: $w;
    height: $w;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    section {
      width: 10%;
      height: 100%;
      position: absolute;
      left: 45%;
    }
    $index: 1;

    @while $index < 9 {

      section:nth-child(#{$index}) {
        @if $index != 1 {
          transform: rotate(22.5deg * ($index - 1));
        }

        .loading-item {
          animation-delay: ( $index - 1 )* 0.05s - 0.35s;
        }

      }
      $index: $index +1;
    }

    .loading-item {
      height: 10%;
      border-radius: 50%;
      background: dodgerblue;
      animation: move 1s ease-in-out infinite alternate;
    }
  }

  @keyframes move {
    from {
      transform: translate(0, 50%);
    }
    to {
      transform: translate(0, 850%);
    }
  }

</style>
