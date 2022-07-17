<script>
import { utilService } from '../services/util-service.js'

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  computed: {
    getTimeCreated() {
      return utilService.formatTime(this.toy.createdAt)
    },
  },
}
</script>

<template>
  <section class="cards-container" v-if="toy">
    <div class="card">
      <h2 class="toy-name">Name: {{ toy.name }}</h2>
      <h3 class="toy-price">Price: {{ toy.price }}$</h3>
      <div class="toy-labels">
        <h3>Labels</h3>
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
