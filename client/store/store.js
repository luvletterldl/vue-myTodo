import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getter, rootState) {
            return state.text + rootState.b.text
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            commit('updateCount', { num: 666 }, { root: true })
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
