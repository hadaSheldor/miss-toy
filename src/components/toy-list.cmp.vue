<template>
  <section v-if="toys" class="toy-list">
    <div class="toy-list-container" v-for="toy in toys" :key="toy._id">
      <button @click="$emit('removeToy', toy._id)">X</button>
      <toy-preview :toy="toy" />
    </div>
  </section>
</template>
<script>
import toyPreview from './toy-preview.cmp.vue'
export default {
  props: {
    toys: Array,
  },
  components: {
    toyPreview,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {},
  unmounted() {},
}
</script>
