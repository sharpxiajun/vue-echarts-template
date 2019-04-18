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
      <div class="paramBox" style="height: 1200px">
        <JsonEditor :json="jsonData" @jsonChange="onJsonChange"></JsonEditor>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>标准散点图</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <ScatterChart :legendShow="chartParams.legendShow" :legendOrient="chartParams.legendOrient"
                      :legendType="chartParams.legendType" :legendLeft="chartParams.legendLeft"
                      :legendTop="chartParams.legendTop" :legendRight="chartParams.legendRight"
                      :legendBottom="chartParams.legendBottom" :legendTextColor="chartParams.legendTextColor"
                      :rotate="chartParams.rotate" :xAxisValue="chartParams.xAxisValue" :axisType="chartParams.axisType"
                      :axisSplitLineColor="chartParams.axisSplitLineColor" :axisLineColor="chartParams.axisLineColor"
                      :labelLimit="chartParams.labelLimit" :labelLimitWidth="chartParams.labelLimitWidth"
                      :axisLabelColor="chartParams.axisLabelColor" :xSplitLineShow="chartParams.xSplitLineShow"
                      :ySplitLineShow="chartParams.ySplitLineShow" :chartData="chartParams.chartData"
                      :colors="chartParams.colors"></ScatterChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import ScatterChart from '@/scatter/scatterChart'
  import JsonEditor from 'components/jsonEditor'
  import {defaultScatter} from 'api/demo/chartDefaultParams'

  export default {
    name: 'basicScatterChart',
    components: {ScatterChart, JsonEditor},
    data() {
      return {
        ...defaultScatter(),
        usedChartParams: {},
        importCodeTpl: `import ScatterChart from 'vue-echarts-template/scatter/scatterChart' `
      }
    },
    computed: {
      jsonData() {
        return {chartParams: this.chartParams}
      },
      codeTpl() {
        let propsKeys = Object.keys(this.chartParams).map((_) => `:${_}="chartParams.${_}"`)
        return propsKeys.length === 0 ? `<ScatterChart${propsKeys.join(' ')}></ScatterChart>` : `<ScatterChart  ${propsKeys.join(' ')}></ScatterChart>`
      }
    },
    methods: {
      onJsonChange(json) {
        console.log('Mock Json', json)
        this.chartParams = json.chartParams
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

<style scoped lang='less'></style>
