<template>
  <div class="toy-app">
    <router-link class="add-toy-btn" to="/toy/edit">Add toy</router-link>
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" :toys="toys" />
  </div>
</template>

<script>
import toyList from '../components/toy-list.cmp.vue'
import toyFilter from '../components/toy-filter.cmp.vue'
export default {
  template: ``,
  components: {
    toyList,
    toyFilter,
  },
  data() {
    return {}
  },
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', toyId })
    },
    setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter))
      this.$store.dispatch({ type: 'setFilterBy', filterBy: filter })
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay
    },
  },
}
</script>
