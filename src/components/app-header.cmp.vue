<template>
  <main class="main-header">
    <nav>
      <router-link class="link-btn" to="/">Home</router-link>
      <router-link class="link-btn" to="/toy">Toys</router-link>
      <router-link class="link-btn" to="/about">About</router-link>
      <router-link class="link-btn" to="/dashboard">Dashboard</router-link>
    </nav>
    <button v-if="!user" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
  </main>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      user: null,
      menuOpen: null,
    }
  },
  methods: {
    async logout() {
      if (this.user) {
        await this.$store.dispatch('userLogout')
        this.$router.push('/login-signup')
      } else this.$router.push('/login-signup')
    },
    login() {
      this.$router.push('/login-signup')
    },
  },
  computed: {
    userAction() {
      if (this.user) return 'Logout'
      else return 'Login'
    },
  },
  created() {
    this.user = this.$store.getters.getUser
  },
}
</script>
