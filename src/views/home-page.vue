<script>
export default {
  created() {
    const user = this.$store.getters.getUser
    if (!user) this.$router.push('/login-signup')
  },
}
</script>

<template>
  <main class="home-page">
    <h1>Home page</h1>
  </main>
</template>
