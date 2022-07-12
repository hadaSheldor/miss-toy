<script>
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'chart-data',
  components: { DoughnutChart },
  props: { data: Object },
  data() {
    return {
      testData: {
        // labels: ['Battery', 'Outdoor', 'Wheels', 'Baby', 'Doll'],
        // datasets: [
        //   {
        //     data: [30, 40, 60, 70, 5],
        //     backgroundColor: [
        //       '#77CEFF',
        //       '#0079AF',
        //       '#123E6B',
        //       '#97B0C4',
        //       '#A5C8ED',
        //     ],
        //   },
        // ],
      },
    }
  },
}
</script>

<template>
  <h1>Chart data</h1>
  <DoughnutChart :chartData="data" />
</template>
