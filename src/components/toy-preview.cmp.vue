<script>
import { utilService } from '../services/util-service.js'
export default {
  props: {
    toy: Object,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    getTimeCreated() {
      return utilService.formatTime(this.toy.createdAt)
    },
  },
}
</script>

<template>
  <section class="toy-preview" v-if="toy">
    <div class="toy-details">
      <h2 class="toy-name">Name: {{ toy.name }}</h2>
      <p class="toy-price">Price: {{ toy.price }}$</p>
      <div class="toy-labels">
        Labels:
        <p v-for="(label, idx) in toy.labels" :key="idx">
          {{ label }}
        </p>
      </div>
      <p class="toy-creation">CreatedAt: {{ getTimeCreated }}</p>
    </div>
    <div class="actions">
      <router-link class="prev-btn" :to="'/toy/' + toy._id"
        >Details</router-link
      >
      <router-link class="prev-btn" :to="'/toy/edit/' + toy._id"
        >Edit</router-link
      >
    </div>
  </section>
</template>
