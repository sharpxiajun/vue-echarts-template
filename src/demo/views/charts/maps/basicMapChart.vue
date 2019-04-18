<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>标准地图</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <MapChart></MapChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import MapChart from '@/map/mapChart'

  export default {
    name: 'basicMapChart',
    components: { MapChart },
    data() {
      return {
        chartParams: {}
      }
    }
  }
</script>

<style scoped></style>
