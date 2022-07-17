<script>
import appHeader from './components/app-header.cmp.vue'
import appFooter from './components/app-footer.cmp.vue'

export default {
  name: 'main-app',
  components: {
    appHeader,
    appFooter,
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' }).then(() => {})
  },
}
</script>

<template>
  <section class="main-layout">
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>
