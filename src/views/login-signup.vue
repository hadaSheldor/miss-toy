<template>
  <section>
    <user-login v-if="action === 'login'" @login="checkLogin" />
    <user-signup v-else @signup="checkSignup" />
    <div class="user-actions">
      <button v-if="action === 'login'" @click="action = 'signup'">
        Signup
      </button>
      <button v-else @click="action = 'login'">Login</button>
    </div>
  </section>
</template>

<script>
// import userLogin from '../components/user-login.vue'
import userLogin from '../components/user-login.vue'
import userSignup from '../components/user-signup.vue'

export default {
  components: {
    userLogin,
    userSignup,
  },
  data() {
    return {
      action: 'login',
    }
  },
  methods: {
    async checkLogin(credential) {
      try {
        await this.$store.dispatch({
          type: 'userLogin',
          credential,
        })
      } catch {
        console.error('Cannot login')
      }
    },

    async checkSignup(signupInfo) {
      try {
        await this.$store.dispatch({
          type: 'userSignup',
          signupInfo,
        })
      } catch {
        console.error('Cannot signup')
      }
    },
  },
  created() {
    const user = this.$store.getters.getUser
    if (user) this.$router.push('/toy')
  },
}
</script>
