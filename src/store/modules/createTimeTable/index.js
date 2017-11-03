import prefix from '../../../prefix'
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import {localData} from 'vue-extend'

export let defaultValue = {
  flag:0,// 0  新建 1 编辑
  dataTable:[],
  tabelTime:{},//课表信息
};
let state = Object.assign({},defaultValue,localData.get(prefix + 'createTimeTable'));

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
