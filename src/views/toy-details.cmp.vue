<script>
import { toyService } from '../services/toy-service.js'
import { utilService } from '../services/util-service.js'

export default {
  data() {
    return {
      toy: null,
    }
  },
  computed: {
    getTimeCreated() {
      return utilService.formatTime(this.toy.createdAt)
    },
  },
  methods: {
    removeToy() {
      this.$store
        .dispatch({ type: 'removeToy', toyId: this.toy._id })
        .then(() => {
          this.$router.push('/toy')
        })
    },
  },
  created() {
    const { toyId } = this.$route.params
    toyService.getById(toyId).then((currToy) => {
      this.toy = currToy
    })
  },
}
</script>
<template>
  <section class="toy-details" v-if="toy">
    <div class="toy-info">
      <h2>{{ toy.name }}</h2>
      <h3>Price: {{ toy.price }}$</h3>
    </div>
    <div class="toy-labels">
      <h3>Labels</h3>
      <p v-for="(label, idx) in toy.labels" :key="idx">
        {{ label }}
      </p>
    </div>
    <p>Created at: {{ getTimeCreated }}</p>
    <h3>Product is: {{ toy.inStock ? 'In stock' : 'Out of stock' }}</h3>
    <div class="toy-reviews">
      <h3>Reviews</h3>
      <p v-for="(review, idx) in toy.reviews" :key="idx">
        {{ review }}
      </p>
    </div>

    <router-link to="/toy">Back</router-link>
    <button @click="removeToy">Delete</button>
  </section>
</template>
