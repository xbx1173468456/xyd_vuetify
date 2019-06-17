import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'
import { auth } from './auth/auth.module'

Vue.use(Vuex)

export interface GlobalState {
  developing: boolean
}

const initGlobalState: GlobalState = {
  developing: true
}

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    auth
  },
  mutations: {},
  state: initGlobalState
})
