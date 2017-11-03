import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import modules from './modules';
import {localData} from "vue-extend";
import prefix from '../prefix'

Vue.use(Vuex);

const state = {}
const plugin = store => {
  store.subscribe((mutation, state) => {
    //需要刷新仍然要保存数据的模块写在这里
    ['createTimeTable'].map((item) => {
      if (mutation.type.indexOf(item) != -1) {
        localData.set(prefix + item, state[item]);
      }
    })

  })
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
  plugins: [plugin]

})
