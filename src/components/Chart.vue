<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
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





<!-- <template>
  <div class="chart-container">
    <div class="chart-wrapper">
      <Bar :id="chartId" :options="chartOptions" :data="chartData" height="100px" />
    </div>
  </div>
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
      chartId: 'my-chart-id', // Set a unique ID for the chart element
      type: "line",
      chartData: {
        labels: this.dataForChart.labels,
        // datasets: this.dataForChart.datasets,
        datasets: [
          {
            label: 'Temperature (°F) for the Next Week',
            borderColor: 'lightBlue',
            backgroundColor: 'lightBlue',
            // data: [10, 22, 23, 25, 21, 24, 22, 44], // Replace this with your actual temperature data
            data: this.dataForChart.datasets[0].data,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false, // Set to false to make the chart 100% in width
      }
    }
  },
  created() {
    // console.log('PROPS:', this.dataForChart);
    // console.log('PROPS TTTTTTTTTT:', Array.from(new Set([...this.dataForChart.datasets[0].data])));
  },
}
</script>
 -->
