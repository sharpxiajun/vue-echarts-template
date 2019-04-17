<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>Mock数据</span>
        <el-button style="float: right; padding: 3px 0" size="mini" type="text" @click="onSaveMockData">保存</el-button>
      </div>
      <div class="paramBox" style="height: 400px">
        <JsonEditor :json="currJsonEditData" @jsonChange="onJsonChange"></JsonEditor>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>基础折线图</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <LineChart :chartData="chartParams.chartData"></LineChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import LineChart from '@/line/lineChart'
  import JsonEditor from 'components/jsonEditor'

  export default {
    name: 'basicLineChart',
    components: { LineChart, JsonEditor },
    data() {
      return {
        chartParams: {
          chartData: {
            legendData: ['告警事件'],
            seriesData: [
              [1432, 1568, 1125, 1359, 1654, 1852, 1523, 1369, 1459, 1854, 1635, 1364]
            ],
            categoryData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        },
        currJsonEditData: {}
      }
    },
    created() {
      this.currJsonEditData = this.chartParams.chartData
    },
    methods: {
      onJsonChange(json) {
        console.log('Mock Json', json)
        this.currJsonEditData = json
      },
      onSaveMockData() {
        this.chartParams.chartData = this.currJsonEditData
      }
    }
  }
</script>

<style scoped>

</style>
