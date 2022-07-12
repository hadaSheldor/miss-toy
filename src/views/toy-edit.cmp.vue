<template>
  <section class="toy-editor" v-if="toy">
    <form @submit.prevent="saveToy">
      <label for="toy-name">Name: </label>
      <input
        v-model="toy.name"
        id="toy-name"
        type="text"
        placeholder="Enter toy name..."
      />
      <label for="toy-price">Price: </label>
      <input
        v-model="toy.price"
        id="toy-price"
        type="number"
        placeholder="Enter toy price..."
      />
      <button>{{ toy._id ? "Save" : "Add" }}</button>
      <router-link to="/toy">Back</router-link>
    </form>
  </section>
</template>
<script>
import { toyService } from "../services/toy-service.js";

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
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: { ...this.toy } })
        .then((toy) => {
          this.$router.push("/toy");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
  created() {
    const { toyId } = this.$route.params;
    if (toyId) {
      toyService.getById(toyId).then((currToy) => {
        this.toy = JSON.parse(JSON.stringify(currToy));
      });
    } else {
      this.toy = toyService.getEmptyToy();
    }
  },
  unmounted() {},
};
</script>
