<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <h1>基础柱状图</h1>
      </div>
      <div class="flex-layout chart-editor">
        <div class="flex-1 mr-20">
          <JsonEditor :json="jsonData" @jsonChange="onJsonChange"></JsonEditor>
        </div>
        <div class="flex-1">
          <BarChart :legendShow="chartParams.legendShow" :legendOrient="chartParams.legendOrient"
                    :legendType="chartParams.legendType" :legendLeft="chartParams.legendLeft"
                    :legendTop="chartParams.legendTop" :legendRight="chartParams.legendRight"
                    :legendBottom="chartParams.legendBottom" :legendTextColor="chartParams.legendTextColor"
                    :gridLeft="chartParams.gridLeft" :gridTop="chartParams.gridTop" :gridRight="chartParams.gridRight"
                    :gridBottom="chartParams.gridBottom"
                    :rotate="chartParams.rotate" :xAxisValue="chartParams.xAxisValue" :axisType="chartParams.axisType" :axisSplitLineColor="chartParams.axisSplitLineColor" :axisLineColor="chartParams.axisLineColor" :labelLimit="chartParams.labelLimit" :labelLimitWidth="chartParams.labelLimitWidth" :axisLabelColor="chartParams.axisLabelColor" :xSplitLineShow="chartParams.xSplitLineShow" :ySplitLineShow="chartParams.ySplitLineShow" :colors="chartParams.colors" :barStack="chartParams.barStack" :barCategoryGap="chartParams.barCategoryGap" :barBorderRadius="chartParams.barBorderRadius" :labelShow="chartParams.labelShow" :chartData="chartParams.chartData">
          </BarChart>
        </div>
      </div>
    </el-card>
    <el-card class="mb-10 params-box">
      <div slot="header" class="clearfix">
        <el-radio-group v-model="chooseRadio" size="medium">
          <el-radio-button label="参数调节" value="1"></el-radio-button>
          <el-radio-button label="代码" value="2"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="wrapper" v-if="chooseRadio === '参数调节'">
        <ParamCard title="网格位置参数">
          <Grid @gridData="gridData"></Grid>
        </ParamCard>
        <ParamCard title="坐标轴参数">
          <Axis @axisData="axisData"></Axis>
        </ParamCard>
        <ParamCard title="图例参数">
          <Legend @legendData="legendData"></Legend>
        </ParamCard>
        <ParamCard title="图形参数">
          <BarParams @barData="barData"></BarParams>
        </ParamCard>
      </div>
      <div class="wrapper" v-if="chooseRadio === '代码'">
        <div class="mb-10" style="height: 36px;">
          <el-input placeholder="请输入内容" v-model="importCodeTpl"></el-input>
        </div>
        <div class="mb-10" style="height: 160px;">
          <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="codeTpl"></el-input>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import ParamCard from 'components/paramCard'
  import Legend from 'components/legend'
  import Grid from 'components/grid'
  import Axis from 'components/axis'
  import BarParams from './barParams'
  import BarChart from '@/bar/barChart'
  import vueJsonEditor from 'vue-json-editor'
  import { Sketch } from 'vue-color'
  import {defaultBar} from 'api/demo/chartDefaultParams'
  import JsonEditor from 'components/jsonEditor'

  export default {
    name: 'basicBarChart',
    components: { BarChart, 'sketch-picker': Sketch, vueJsonEditor, JsonEditor, ParamCard, Legend, Grid, Axis, BarParams },
    data() {
      return {
        chooseRadio: '参数调节',
        ...defaultBar(),
        importCodeTpl: `import BarChart from 'vue-echarts-template/bar/barChart' `
      }
    },
    computed: {
      jsonData() {
        return {chartParams: this.chartParams}
      },
      codeTpl() {
        let propsKeys = Object.keys(this.chartParams).map((_) => `:${_}="chartParams.${_}"`)
        return propsKeys.length === 0 ? `<BarChart${propsKeys.join(' ')}></BarChart>` : `<BarChart ${propsKeys.join(' ')}></BarChart>`
      }
    },
    created() {

    },
    mounted() {
      
    },
    watch: {},
    methods: {
      onJsonChange(json) {
        console.log('Mock Json', json)
        this.chartParams = json.chartParams
      },
      legendData(legend) {
        console.log(legend, '===legend====')
        this.chartParams.legendShow = legend.show
        this.chartParams.legendType = legend.type
        this.chartParams.legendOrient = legend.orient
        this.chartParams.legendLeft = legend.left
        this.chartParams.legendRight = legend.right
        this.chartParams.legendTop = legend.top
        this.chartParams.legendBottom = legend.bottom
        this.chartParams.legendTextColor = legend.textColor
      },
      gridData(grid) {
        console.log(grid, '===grid====')
        this.chartParams.gridLeft = grid.left
        this.chartParams.gridRight = grid.right
        this.chartParams.gridTop = grid.top
        this.chartParams.gridBottom = grid.bottom
      },
      axisData(axis) {
        console.log(axis, '===axis====')
        this.chartParams.rotate = axis.rotate
        this.chartParams.xAxisValue = axis.xAxisValue
        this.chartParams.axisType = axis.axisType
        this.chartParams.axisSplitLineColor = axis.splitLineColor
        this.chartParams.axisLineColor = axis.lineColor
        this.chartParams.labelLimit = axis.labelLimit
        this.chartParams.labelLimitWidth = axis.labelLimitWidth
        this.chartParams.axisLabelColor = axis.labelColor
        this.chartParams.xSplitLineShow = axis.xSplitLineShow
        this.chartParams.ySplitLineShow = axis.ySplitLineShow
      },
      barData(bar) {
        console.log(bar, bar.colors.split(','), bar.barBorderRadius.split(','), typeof bar.colors.split(','), '===bar====')
        this.chartParams.colors = bar.colors.split(',')
        this.chartParams.barStack = bar.barStack
        this.chartParams.barCategoryGap = bar.barCategoryGap
        var barBorderRadius = bar.barBorderRadius.split(',')
        barBorderRadius = barBorderRadius.map(item => {
          return parseInt(item)
        })
        this.chartParams.barBorderRadius = barBorderRadius
        this.chartParams.labelShow = bar.labelShow
      }
      
    }
  }
</script>

<style scoped lang="less"></style>
