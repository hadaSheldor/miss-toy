<template>
  <div class="signup">
    <h2>Signup</h2>
    <form @submit.prevent="signup" class="signup-form flex column">
      <input
        type="text"
        class="signup-fullname"
        v-model="signupInfo.fullname"
        placeholder="Enter your full name"
        oninvalid="this.setCustomValidity('Please enter valid full name')"
        oninput="this.setCustomValidity('')"
        required
      />
      <input
        type="text"
        class="signup-username"
        v-model="signupInfo.username"
        placeholder="Enter your username"
        oninvalid="this.setCustomValidity('Worng username')"
        oninput="this.setCustomValidity('')"
        required
      />
      <input
        type="password"
        class="signup-password"
        v-model="signupInfo.password"
        placeholder="Enter your password"
        oninvalid="this.setCustomValidity('Worng password')"
        oninput="this.setCustomValidity('')"
        required
      />
      <button>Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signupInfo: {
        fullname: '',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    signup() {
      this.$emit('signup', this.signupInfo)
    },
  },
}
</script>
