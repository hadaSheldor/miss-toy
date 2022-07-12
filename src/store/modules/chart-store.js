import { createStore } from 'vuex'

const store = createStore({
  strict: true,
  state: {
    toys: null,
  },
  getters: {
    toys({ toys }) {
      return toys
    },
  },
  mutations: {},
  actions: {},
})

export default store
