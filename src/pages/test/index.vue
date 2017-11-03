<template>
  <div>
    sdfsdfsdsdsdfsdff
    <div class="test">测试1</div>
    <div class="test">测试2</div>
    <div class="test">测试3</div>
    <div class="test">测试4</div>
    <div class="test">测试5</div>
    <div class="test">测试6</div>
    <div class="test">测试7</div>
    <div class="test">测试8</div>
    <div class="test">测试9</div>
    <div class="test">测试10</div>
    <div class="test">测试11</div>
    <div class="test">测试12</div>
    <div class="test">测试13</div>
    <div class="test">测试14</div>
    <div class="test">测试15</div>
    <div class="test">测试16</div>
    <div class="test">测试17</div>
    <div class="test">测试18</div>
    <div class="test">测试19</div>
    <div class="test">测试20</div>
    <div class="test">测试21</div>
    <div class="test">测试22</div>
    <div class="test">测试23</div>
    <div class="test">测试24</div>
    <div class="test">测试25</div>
    <div class="test">测试26</div>
    <div class="test">测试27</div>
    <div class="test">测试28</div>
    <div class="test">测试29</div>
    <div class="test">测试30</div>
  </div>
</template>
<script>
  import {mapMutations,mapActions} from 'vuex';
  export default {
    components: {},
    props: {},
    beforeCreate() {

    },
    created() {
      console.log(localStorage);
      this.setState({name:345});
      console.log(localStorage);
    },
    mounted() {
    },
    data() {
      return {}
    },
    methods: {
      ...mapMutations('createTimeTable',['setState'])
    },
    computed: {},
    filters: {},

  }
</script>
<style scoped>

</style>
<style>
  .test {
    height: 30px;
    border: 1px solid red;
  }
</style>
