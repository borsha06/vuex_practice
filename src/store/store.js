import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    information: [
      {
        name: 'Tasfia',
        section: true,
        roll: 1
      },
      {
        name: 'Sharmin',
        section: false,
        roll: 2

      },
      {
        name: 'Borsha',
        section: false,
        roll:1
      },
      {
        name: 'Bo',
        section: true,
        roll:3

      },
      {
        name:'Bornee',
        section:false,
        roll:2,
      }

    ],
  },

  mutations: {
    SHOW_LIST(state) {
        return state.information.filter(info => {
          if(info.section===true)
            return info.section;
          return info.section;
        })
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
          return info;
        }
      )},


  }

})
