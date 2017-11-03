import {defaultValue} from './index'

export default {
  setState(state, obj) {
    Object.assign(state, obj);
  },
  resetStore(state) {
    Object.assign(state, defaultValue)
  },
}
