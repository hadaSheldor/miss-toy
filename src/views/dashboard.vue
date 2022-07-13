<script>
import chartCmp from '../components/chart.cmp.vue'

export default {
  name: 'dashboard',
  components: { chartCmp },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay
    },
    chartData() {
      const toys = this.toys
      const mappedLables = {}

      toys.forEach((toy) => {
        toy.labels.forEach((label) => {
          if (mappedLables[label]) {
            mappedLables[label].count++
            mappedLables[label].avgPrice += toy.price
          } else {
            mappedLables[label] = { count: 1, avgPrice: toy.price }
          }
        })
      })

      for (const key in mappedLables) {
        mappedLables[key] = mappedLables[key].avgPrice / mappedLables[key].count
      }

      return {
        labels: Object.keys(mappedLables),
        datasets: [
          {
            data: Object.values(mappedLables),
            backgroundColor: [
              '#77CEFF',
              '#0079AF',
              '#123E6B',
              '#97B0C4',
              '#A5C8ED',
            ],
          },
        ],
      }
    },
  },
}
</script>

<template>
  <section v-if="toys">
    <h1>Dashboard Stats</h1>
    <chart-cmp :data="chartData" />
  </section>
</template>
