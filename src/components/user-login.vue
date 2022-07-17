<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input
        class="login-username"
        v-model="credential.username"
        placeholder="Enter username..."
        oninvalid="this.setCustomValidity('Wrong username...')"
        oninput="this.setCustomValidity('')"
        required
        type="text"
      />
      <input
        class="login-password"
        v-model="credential.password"
        placeholder="Enter password"
        oninvalid="this.setCustomValidity('Wrong password...')"
        oninput="this.setCustomValidity('')"
        required
        type="password"
      />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credential: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$emit('login', this.credential)
    },
  },
}
</script>
