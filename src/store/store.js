import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    names: [],
    newNames: '',
    sections: [],
    newSecions: ''
  },
  mutations: {
    GET_NAME(state, name){
      state.newNames =  name
    },
    ADD_NAME(state){
      state.names.push({
        body: state.newNames,

      })
    },

    CLEAR_NAME(state){
      state.newNames = ''
    }
  },
  actions: {
    getName({commit}, name){
      commit('GET_NAME', name)
    },
    addName({commit}){
      commit('ADD_NAME')
    },
    clearName({commit}){
      commit('CLEAR_NAME')
    }

  },
  getters: {
    newNames: state => state.newNames,
    names: state => state.names.filter((name) => {return name}),
    

  }

})
