import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
import { product } from './product'

Vue.use(Vuex)

const vuexPersistence = new VuexPersistence({
  storage: window.localStorage,
  modules: ['product'],
})

const store = new Vuex.Store({
  modules: {
    product,
  },
  plugins: [vuexPersistence.plugin],
})

export default store
