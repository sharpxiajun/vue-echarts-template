<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <h1>基础柱状图</h1>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <BarChart></BarChart>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <el-radio-group v-model="chooseRadio" size="medium">
          <el-radio-button label="参数调节" value="1"></el-radio-button>
          <el-radio-button label="代码" value="2"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="wrapper" v-if="chooseRadio === '参数调节'">
        <ParamCard title="坐标轴参数">
          <Axis></Axis>
        </ParamCard>
        <ParamCard title="图例参数">
          <Legend @showLegend="showLegend" @typeLegend="typeLegend" @orientLegend="orientLegend" @leftLegend="leftLegend" @rightLegend="rightLegend" @topLegend="topLegend" @bottomLegend="bottomLegend"></Legend>
        </ParamCard>
        <ParamCard title="图形参数">
        </ParamCard>
      </div>
      <div class="wrapper" v-if="chooseRadio === '代码'"></div>
    </el-card>
  </div>
</template>

<script>
  import ParamCard from 'components/paramCard'
  import Legend from 'components/legend'
  import Axis from 'components/axis'
  import BarChart from '@/bar/barChart'
  import vueJsonEditor from 'vue-json-editor'
  import { Sketch } from 'vue-color'

  export default {
    name: 'basicBarChart',
    components: { BarChart, 'sketch-picker': Sketch, vueJsonEditor, ParamCard, Legend, Axis },
    data() {
      return {
        chooseRadio: '参数调节',
        legendShow: true,
        legendType: 'plain',
        legendOrient: 'scroll',
        legendLeft: 'auto',
        legendRight: 'auto',
        legendTop: 'auto',
        legendBottom: 'auto'
      }
    },
    computed: {
    },
    created() {

    },
    mounted() {
      
    },
    watch: {},
    methods: {
      showLegend(show) {
        this.legendShow = show
      },
      typeLegend(type) {
        this.legendType = type
      },
      orientLegend(orient) {
        this.legendOrient = orient
      },
      leftLegend(left) {
        this.legendLeft = left
      },
      rightLegend(right) {
        this.legendRight = right
      },
      topLegend(top) {
        this.legendTop = top
      },
      bottomLegend(bottom) {
        this.legendBottom = bottom
      }
    }
  }
</script>

<style scoped lang="less"></style>
