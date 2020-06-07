import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: true
  },
  getters: {
    isLogged: state => {
      return state.logged
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
