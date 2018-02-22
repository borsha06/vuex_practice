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
        roll:3,
      },
      {
        name:'Y',
        section:true,
        roll:2
      }

    ],
  },


  getters: {

    information(state) {
      return state.information.filter(info => {
            return info;
        }
      )},
  }

})
