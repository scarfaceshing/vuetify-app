<template>
<v-app>
 <v-row>
  <v-col>
   <v-card dark>
    <BarChart :chartdata="chartdata" :options="options" />
   </v-card>
  </v-col>
  <v-col>
   <v-card dark>
    <LineChart :chartdata="chartdata" :options="options" />
   </v-card>
  </v-col>
  <v-col>
   <v-card dark>
    <PieChart :chartdata="circledata" :options="options" />
   </v-card>
  </v-col>
 </v-row>
 <v-row>
  <v-col>
   <v-card dark>
    <DoughnutChart :chartdata="circledata" :options="options" />
   </v-card>
  </v-col>
  <v-col>
   <v-card dark>
    <HorizontalBarChart :chartdata="chartdata" :options="options" />
   </v-card>
  </v-col>
  <v-col>
   <v-card dark>
    <PolarAreaChart :chartdata="circledata" :options="options" />
   </v-card>
  </v-col>
 </v-row>
 <v-row>
  <v-col>
   <v-card dark>
    <RadarChart :chartdata="circledata" :options="options" />
   </v-card>
  </v-col>
  <v-col>
   <v-card dark>
    <BubbleChart :chartdata="bubbledata" :options="options" />
   </v-card>
  </v-col>
  <v-col>
   <v-card dark>
    <ScatterChart :chartdata="bubbledata" :options="options" />
   </v-card>
  </v-col>
 </v-row>
</v-app>
</template>

<script>
// @ is an alias to /src
// import BarChart from '@/components/chart/BarChart.vue';
// import LineChart from '@/components/chart/LineChart.vue';
// import DoughnutChart from '@/components/chart/DoughnutChart.vue';
// import PieChart from '@/components/chart/PieChart.vue';
// import HorizontalBarChart from '@/components/chart/HorizontalBarChart.vue';
// import PolarAreaChart from '@/components/chart/PolarAreaChart.vue';
// import RadarChart from '@/components/chart/RadarChart.vue';
// import BubbleChart from '@/components/chart/BubbleChart.vue';
// import ScatterChart from '@/components/chart/ScatterChart.vue';

export default {
 name: 'dashboard',
 components: {
  BarChart: () => import("@/components/chart/BarChart.vue"),
  LineChart: () => import("@/components/chart/LineChart.vue"),
  DoughnutChart: () => import("@/components/chart/DoughnutChart.vue"),
  PieChart: () => import("@/components/chart/PieChart.vue"),
  HorizontalBarChart: () => import("@/components/chart/HorizontalBarChart.vue"),
  PolarAreaChart: () => import("@/components/chart/PolarAreaChart.vue"),
  RadarChart: () => import("@/components/chart/RadarChart.vue"),
  BubbleChart: () => import("@/components/chart/BubbleChart.vue"),
  ScatterChart: () => import("@/components/chart/ScatterChart.vue")
 },
 data: () => ({
  datas: [],
  elevation: [6, 12, 18],
  bubbledata: {
   datasets: [{
     label: 'A',
     data: [{
      x: 3,
      y: 7,
      r: 10
     }, {
      x: 33,
      y: 74,
      r: 32
     }],
     backgroundColor: "#fcba03",
     hoverBackgroundColor: "#ff6384"
    },
    {
     label: 'B',
     data: [{
      x: 6,
      y: 2,
      r: 10
     }],
     backgroundColor: "#9dfc03",
     hoverBackgroundColor: "#ff6384"
    },
    {
     label: 'C',
     data: [{
      x: 2,
      y: 6,
      r: 10
     }],
     backgroundColor: "#fc03ca",
     hoverBackgroundColor: "#ff6384"
    }
   ]
  },
  circledata: {
   labels: ['A', 'B', 'C'],
   datasets: [{
    backgroundColor: [
     '#41B883',
     '#E46651',
     '#00D8FF'
    ],
    data: []
   }]
  },
  chartdata: {
   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
   datasets: [{
     label: 'A',
     backgroundColor: '#fcba03',
     data: []
    },
    {
     label: 'B',
     backgroundColor: '#9dfc03',
     data: []
    },
    {
     label: 'C',
     backgroundColor: '#fc03ca',
     data: []
    }
   ]
  },
  options: {
   responsive: true,
   maintainAspectRatio: false
  }
 }),
 created() {
  this.chartdata.datasets.forEach((item, index) => {
   for (let count = 0; count < 12; count++) {
    this.chartdata.datasets[index].data.push(Math.floor(Math.random() * 100) + 1);
   }
  })

  for (let count = 0; count < 3; count++) {
   this.circledata.datasets[0].data.push(Math.floor(Math.random() * 100) + 1);
  }
 },
 mounted() {
  console.log(this.$route.name);
 }
}
</script>
