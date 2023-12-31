import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //Vue.prototyoe.$store

export default new Vuex.Store({
  state: {
    tokenInfo: JSON.parse(window.localStorage.getItem('tokenInfo')) || null
  },
  getters: {
  },
  mutations: {
    saveTokenInfo(state,payload){
      state.tokenInfo = JSON.parse(payload)
      window.localStorage.setItem('tokenInfo',payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
