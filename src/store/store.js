import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    information: [
      {
        name: 'Tasfia',
        section: 1,
        roll: 1
      },
      {
        name: 'Sharmin',
        section: 2,
        roll: 2

      },
      {
        name: 'Borsha',
        section: 1,
        roll:1
      }

    ],
  },

  mutations: {
    SHOW_LIST(state) {
      state.information.forEach(info => {
        return info.section;
      });
    }

  },

  actions: {
    showList({commit}) {
      commit('SHOW_LIST')
    }

  },
  getters: {

    information(state) {
      return state.information.filter(info => {
          return info.section;
        }
      )},


  }

})
