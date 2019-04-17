<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>标准饼状图</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <PieChart :seriesLabelShow="chartParams.seriesLabelShow" :pieAutoPlay="chartParams.pieAutoPlay"></PieChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import PieChart from '@/pie/pieChart'

  export default {
    name: 'basicPieChart',
    components: { PieChart },
    data() {
      return {
        chartParams: {
          seriesLabelShow: true,
          pieAutoPlay: true
        }
      }
    }
  }
</script>

<style scoped></style>
