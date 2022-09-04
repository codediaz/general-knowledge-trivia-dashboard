<template lang="">
    <v-app id="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
      <SideBar></SideBar>
      <v-container class="mt-10">
        <v-row
        class="mt-5"
        cols="12"
        >
        <v-col
        class="v-container-chart-left"
        cols="12" sm="6"><v-chart class="chart mt-2" :option="completed"/></v-col>
        <v-col
        class="v-container-chart-right"
        cols="12" sm="6"><v-chart class="chart mt-2" :option="scores"/>
        </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>
<script>
import SideBar from '../components/SideBar'
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart,LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  CanvasRenderer,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
    data: () => ({
    toggle_exclusive: 1,
       
    scores: {
        legend: {
        top: 'bottom'
        },
        title: {
          text: "Puntuaciones",
          left: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
      
        series: [
        {
            name: 'Score Chart',
            type: 'pie',
            radius: [50, 200],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
              { value: 7, name: "Geografía" },
              { value: 5, name: "Historia" },
              { value: 20, name: "Deportes" },
              { value: 16, name: "Entretenimiento" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0)"
              }
            }
          }
        ]
},
    completed: {
    title: {
        text: 'Tiempos'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Geografia', 'Historia', 'Deportes', 'Entretenimiento'],
        top: 'bottom'
    },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
        name: 'Geografia',
        type: 'line',
        stack: 'Total',
        data: [10, 1, 1, 13, 9, 30, 10]
        },
        {
        name: 'Historia',
        type: 'line',
        stack: 'Total',
        data: [22, 18, 11, 4, 0, 40, 10]
        },
        {
        name: 'Deportes',
        type: 'line',
        stack: 'Total',
        data: [0, 22, 21, 14, 19, 30, 0]
        },
        {
        name: 'Entretenimiento',
        type: 'line',
        stack: 'Total',
        data: [32, 32, 30, 3, 0, 0, 11]
        },
    ]
    }
  }),
    components: {
      SideBar,
      VChart
      
    },
    provide: {
    [THEME_KEY]: "green"
  },  
    
}
</script>
<style>
    .v-container-chart-left{
        height: 500px;
    }
    .v-container-chart-right{
        height: 500px;
    }
    
</style>