<template>
  <h1>Dashboard Stats</h1>
  <DoughnutChart :chartData="testData" />
</template>

<script>
import { Chart, registerables } from 'chart.js'
import { DoughnutChart } from 'vue-chart-3'

Chart.register(...registerables)
export default {
  name: 'dashboard',
  components: { DoughnutChart },
  data() {
    return {
      testData: {
        labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [
          {
            data: [30, 40, 60, 70, 5],
            backgroundColor: [
              '#77CEFF',
              '#0079AF',
              '#123E6B',
              '#97B0C4',
              '#A5C8ED',
            ],
          },
        ],
      },
    }
  },

  components: {},
}
</script>
