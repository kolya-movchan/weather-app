<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    dataForChart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartData: this.dataForChart,
      chartOptions: {
        responsive: true
      }
    }
  },
  created() {
    console.log('PROPS:', this.dataForChart);
  },
}
</script>
