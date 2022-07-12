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
      let toys = this.toys
      const mappedLables = {}
      toys.forEach((toy) => {
        if (toy.labels) {
          toy.labels.forEach((label) => {
            mappedLables[label]++
          })
        }
      })

      for (let label in mappedLables) {
        const avgPrice = toys.reduce((acc, toy) => {
          if (toy.labels) {
            toy.labels.forEach((tl) => {
              acc + (tl === label ? toy.price : 0)
            })
          }
        }, 0)
        console.log(avgPrice)
        mappedLables[label] = avgPrice / mappedLables[label]
      }
      console.log(mappedLables)
      console.log(Object.keys(mappedLables))
      console.log(Object.values(mappedLables))
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
