<template>
  <section class="toy-details" v-if="toy">
    <div class="toy-info">
      <h2>Name: {{ toy.name }}</h2>
      <h3>Price: {{ toy.price }}$</h3>
    </div>
    <div class="toy-labels">
      <h3>Labels:</h3>
      <ul>
        <li v-for="(label, idx) in toy.labels" :key="idx">
          {{ label }}
        </li>
      </ul>
    </div>
    <p>Created at: {{ toy.createdAt }}</p>
    <p>Product is: {{ toy.inStock ? "In stock" : "Out of stock" }}</p>
    <div class="toy-reviews">
      <h3>Reviews:</h3>
      <ol>
        <li v-for="(review,idx) in toy.reviews" :key="idx">
          {{ review }}
        </li>
      </ol>
    </div>
    <router-link to="/toy">Back</router-link>
    <button @click="removeToy">Delete</button>
  </section>
</template>
<script>
import { toyService } from "../services/toy-service";

export default {
  props: [],
  template: ``,
  components: {},
  data() {
    return {
      toy: null,
    };
  },
  methods: {
    removeToy() {
      this.$store
        .dispatch({ type: "removeToy", toyId: this.toy._id })
        .then(() => {
          this.$router.push("/toy");
        });
    },
  },
  computed: {},
  created() {
    const { toyId } = this.$route.params;
    toyService.getById(toyId).then((currToy) => {
      this.toy = currToy;
    });
  },
  unmounted() {},
};
</script>
