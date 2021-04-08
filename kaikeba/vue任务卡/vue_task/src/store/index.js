import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenVal:''
  },
  mutations: {
    setToken(state,payload){
      state.tokenVal = payload.token
    }
  },
  actions: {
  },
  modules: {
  }
})
