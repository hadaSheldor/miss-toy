import { userService } from '@/services/user-service.js'

export const userStore = {
  strict: true,
  state: {
    user: userService.getLoggedInUser(),
  },
  getters: {
    getUser({ user }) {
      return user
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user
    },
  },
  actions: {
    userLogin({ commit }, { credential }) {
      try {
        userService.login(credential)
        commit({ type: 'setUser', user: credential })
      } catch {
        console.error('Cannot login')
      }
    },
    userSignup({ commit }, { signupInfo }) {
      try {
        userService.signup(signupInfo)
        commit({ type: 'setUser', user: signupInfo })
      } catch {
        console.error('Cannot signup')
      }
    },
    userLogout({ commit }) {
      try {
        userService.logout()
        commit({ type: 'setUser', user: null })
      } catch {
        console.error('Cannot logout')
      }
    },
  },
}
