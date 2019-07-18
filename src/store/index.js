import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import collect from './modules/collect'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collect, // 收银
    common // 公用
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
})
