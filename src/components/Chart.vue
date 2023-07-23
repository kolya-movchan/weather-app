<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'Chart',
  components: { Line },
  props: {
    dataForChart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartId: 'my-chart-id', 
      type: "line",
      chartData: {
        labels: this.dataForChart.labels,
        datasets: [
          {
            label: this.dataForChart.labels.length > 8 ? 'Daily Temperature (°F)' : 'Weekly Temperature (°F)',
            borderColor: 'lightBlue',
            backgroundColor: 'lightBlue',
            data: this.dataForChart.datasets[0].data,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
}
</script>
