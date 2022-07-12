<script>
import chartCmp from '../components/chart.cmp.vue'

export default {
  name: 'dashboard',
  components: { chartCmp },
  computed: {
    chartData() {
      return {
        labels: ['Battery', 'Outdoor', 'Wheels', 'Baby', 'Doll'],
        datasets: [
          {
            data: [299, 299, 160, 299, 160],
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
  <h1>Dashboard Stats</h1>
  <chart-cmp :data="chartData" />
</template>
