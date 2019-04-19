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
        <GaugeChart :legendShow="chartParams.legendShow" :legendOrient="chartParams.legendOrient"
                    :legendType="chartParams.legendType" :legendLeft="chartParams.legendLeft"
                    :legendTop="chartParams.legendTop" :legendRight="chartParams.legendRight"
                    :legendBottom="chartParams.legendBottom" :legendTextColor="chartParams.legendTextColor"
                    :chartData="chartParams.chartData" :colors="chartParams.colors" :gaugeTitle="chartParams.gaugeTitle"
                    :gaugeTitleColor="chartParams.gaugeTitleColor"
                    :detailTextShadowColor="chartParams.detailTextShadowColor" :shadowColor="chartParams.shadowColor"
                    :detailColor="chartParams.detailColor"></GaugeChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import GaugeChart from '@/gauge/gaugeChart'
  import JsonEditor from 'components/jsonEditor'
  import {defaultGauge} from 'api/demo/chartDefaultParams'

  export default {
    name: 'basicGaugeChart',
    components: {GaugeChart, JsonEditor},
    data() {
      return {
        ...defaultGauge(),
        usedChartParams: {},
        importCodeTpl: `import GaugeChart from 'vue-echarts-template/gauge/gaugeChart' `
      }
    },
    computed: {
      jsonData() {
        return {chartParams: this.chartParams}
      },
      codeTpl() {
        let propsKeys = Object.keys(this.chartParams).map((_) => `:${_}="chartParams.${_}"`)
        return propsKeys.length === 0 ? `<GaugeChart${propsKeys.join(' ')}></GaugeChart>` : `<GaugeChart  ${propsKeys.join(' ')}></GaugeChart>`
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

<style scoped lang='less'></style>
