<script>
export default {
  data() {
    return {
      filterBy: {
        txt: '',
        status: '',
        byLabel: [],
        bySort: '',
      },
      labels: [
        'On wheels',
        'Box game',
        'Art',
        'Baby',
        'Doll',
        'Puzzle',
        'Outdoor',
        'Battery powered',
      ],
      stockOptions: ['In stock', 'Out of stock'],
      sortOptions: [
        'Name - Increasing',
        'Name - Decreasing',
        'Price - Increasing',
        'Price - Decreasing',
        'Created - Increasing',
        'Created - Decreasing',
      ],
    }
  },
  methods: {
    setFilter() {
      if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
      this.$emit('setFilter', this.filterBy)
    },
  },
}
</script>

<template>
  <section class="main-filter">
    <input
      @input="setFilter"
      v-model="filterBy.txt"
      type="text"
      placeholder="Filter by name..."
    />
    <select @change="setFilter" v-model="filterBy.byLabel" multiple>
      <option value="">Select a label...</option>
      <option v-for="(label, idx) in labels" :value="label" :key="idx">
        {{ label }}
      </option>
    </select>
    <select @change="setFilter" v-model="filterBy.status">
      <option value="">Filter by status...</option>
      <option v-for="(opt, idx) in stockOptions" :value="opt" :key="idx">
        {{ opt }}
      </option>
    </select>
    <select @change="setFilter" v-model="filterBy.bySort">
      <option value="">Filter by sort...</option>
      <option v-for="(opt, idx) in sortOptions" :value="opt" :key="idx">
        {{ opt }}
      </option>
    </select>
  </section>
</template>
