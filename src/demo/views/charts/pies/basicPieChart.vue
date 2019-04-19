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
        <span>标准饼状图</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <PieChart :legendShow="chartParams.legendShow" :legendOrient="chartParams.legendOrient"
                  :legendType="chartParams.legendType" :legendLeft="chartParams.legendLeft"
                  :legendTop="chartParams.legendTop" :legendRight="chartParams.legendRight"
                  :legendBottom="chartParams.legendBottom" :legendTextColor="chartParams.legendTextColor"
                  :chartData="chartParams.chartData" :colors="chartParams.colors" :pieName="chartParams.pieName"
                  :seriesLabelShow="chartParams.seriesLabelShow" :pieAutoPlay="chartParams.pieAutoPlay"
                  :center="chartParams.center" :radius="chartParams.radius" :showPercent="chartParams.showPercent"
                  :pieAutoPlayNumStyle="chartParams.pieAutoPlayNumStyle"
                  :pieAutoPlayTextStyle="chartParams.pieAutoPlayTextStyle" :showRatio="chartParams.showRatio"
                  :seriesLabelEmphasisShow="chartParams.seriesLabelEmphasisShow"></PieChart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import PieChart from '@/pie/pieChart'
  import JsonEditor from 'components/jsonEditor'
  import {defaultPie} from 'api/demo/chartDefaultParams'

  export default {
    name: 'basicPieChart',
    components: {PieChart, JsonEditor},
    data() {
      return {
        ...defaultPie(),
        usedChartParams: {},
        importCodeTpl: `import PieChart from 'vue-echarts-template/pie/pieChart' `
      }
    },
    computed: {
      jsonData() {
        return {chartParams: this.chartParams}
      },
      codeTpl() {
        let propsKeys = Object.keys(this.chartParams).map((_) => `:${_}="chartParams.${_}"`)
        return propsKeys.length === 0 ? `<PieChart${propsKeys.join(' ')}></PieChart>` : `<PieChart  ${propsKeys.join(' ')}></PieChart>`
      }
    },
    created() {
      console.log('打印data', this)
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

<style scoped></style>
