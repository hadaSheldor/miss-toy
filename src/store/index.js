import { createStore } from 'vuex'
import { toyService } from '../services/toy-service.js'
import chartStore from './modules/chart-store.js'

const store = createStore({
  strict: true,
  modules: {
    chartStore,
  },
  state: {
    toys: null,
    filterBy: null,
  },
  getters: {
    toysToDisplay({ toys }) {
      return toys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex((t) => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex((t) => t._id === toyId)
      state.toys.splice(idx, 1)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService
        .query()
        .then((toys) => {
          commit({ type: 'setToys', toys })
          return toys
        })
        .catch((err) => {
          console.log(err)
        })
    },
    saveToy({ commit }, { toy }) {
      let actionType = toy._id ? 'updateToy' : 'addToy'
      return toyService
        .saveToy(toy)
        .then((savedToy) => {
          commit({ type: actionType, toy: savedToy })
          return savedToy
        })
        .catch((err) => {
          console.log(err)
        })
    },
    removeToy({ commit }, { toyId }) {
      return toyService
        .removeToy(toyId)
        .then(() => {
          commit({ type: 'removeToy', toyId })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setFilterBy({ commit }, { filterBy }) {
      toyService.query(filterBy).then((toys) => {
        commit({ type: 'setToys', toys })
        // commit({ type: 'setFilterBy', filterBy })
      })
    },
  },
})

export default store
