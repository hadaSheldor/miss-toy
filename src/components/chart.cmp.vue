<script>
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'chart-data',
  props: { data: Object },
  components: { DoughnutChart },
}
</script>

<template>
  <h2>Chart data</h2>
  <h3>Number of toys per lable</h3>
  <DoughnutChart :chartData="data" />
</template>
