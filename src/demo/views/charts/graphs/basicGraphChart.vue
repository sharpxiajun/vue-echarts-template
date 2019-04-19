<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>Mock数据</span>
      </div>
      <div class="mb-10" style="height: 36px;">
        <el-input placeholder="请输入内容" v-model="importCodeTpl"></el-input>
      </div>
      <div class="mb-10" style="height: 160px;">
        <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="codeTpl"></el-input>
      </div>
      <div class="paramBox" style="height: 500px">
        <JsonEditor :json="jsonData" @jsonChange="onJsonChange"></JsonEditor>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>标准仪表盘</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <GraphChart :legendShow="chartParams.legendShow" :legendOrient="chartParams.legendOrient"
                    :legendType="chartParams.legendType" :legendLeft="chartParams.legendLeft"
                    :legendTop="chartParams.legendTop" :legendRight="chartParams.legendRight"
                    :legendBottom="chartParams.legendBottom" :legendTextColor="chartParams.legendTextColor"
                    :chartData="chartParams.chartData" :colors="chartParams.colors"
                    :centerPoint="chartParams.centerPoint" :symbolType="chartParams.symbolType"
                    :graphLineColor="chartParams.graphLineColor" :graphTextColor="chartParams.graphTextColor"
                    :setItemColor="chartParams.setItemColor"></GraphChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import GraphChart from '@/graph/graphChart'
  import JsonEditor from 'components/jsonEditor'
  import {defaultGraph} from 'api/demo/chartDefaultParams'

  export default {
    name: 'basicGraphChart',
    components: {GraphChart, JsonEditor},
    data() {
      return {
        ...defaultGraph(),
        usedChartParams: {},
        importCodeTpl: `import GraphChart from 'vue-echarts-template/graph/graphChart' `
      }
    },
    computed: {
      jsonData() {
        return {chartParams: this.chartParams}
      },
      codeTpl() {
        let propsKeys = Object.keys(this.chartParams).map((_) => `:${_}="chartParams.${_}"`)
        return propsKeys.length === 0 ? `<GraphChart${propsKeys.join(' ')}></GraphChart>` : `<GraphChart  ${propsKeys.join(' ')}></GraphChart>`
      }
    },
    methods: {
      onJsonChange(json) {
        console.log('Mock Json', json)
        this.chartParams = json.chartParams
      },
      onChartClick(params) {
        console.log('onChartClick', params)
      },
      codeWatchTpl() {
        let propsKeys = Object.keys(this.chartParams)
        let arr = []
        propsKeys.forEach((item, ind) => {
          let s = `'chartParams.${item}'(newVal, oldVal) {
                      console.log('chartParams.${item}', newVal, oldVal)
                      this.usedChartParams.${item} = newVal
                   },`
          arr.push(s)
        })
        console.log(arr.join('\n'))
      }
    }
  }
</script>

<style scoped>

</style>
