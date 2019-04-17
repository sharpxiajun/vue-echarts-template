<template>
  <div class="full-block">
    <ECharts :options="options" auto-resize></ECharts>
  </div>
</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import axisChartMixin from 'mixins/axisChartMixin'
  import ECharts from 'vue-echarts/components/ECharts'
  import chartColors from 'constants/chartColors'
  import { getMaxValue, getMinValue } from 'constants/utils'

  export default {
    name: 'barChart',
    components: { ECharts },
    mixins: [ globalChartMixin, axisChartMixin ],
    props: {
      chartData: {
        type: Object,
        default: function() {
          return {
            legendData: ['IP'],
            seriesData: [[16672, 14345, 19876, 22098]],
            categoryData: ['IDC', 'IRCS', 'CDN', 'DNS']
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.barColors
      },
      barStack: {
        type: Boolean,
        default: false
      },
      barCategoryGap: {
        type: String,
        default: '40%'
      },
      barBorderRadius: {
        type: Number,
        default: 0
      },
      labelShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        chartName: '[柱状图模板]'
      }
    },
    watch: {
      chartData(newVal, oldVal) {
        console.log(`${this.chartName}chartData[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      colors(newVal, oldVal) {
        console.log(`${this.chartName}colors[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      barStack(newVal, oldVal) {
        console.log(`${this.chartName}barStack[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      barCategoryGap(newVal, oldVal) {
        console.log(`${this.chartName}barCategoryGap[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      barBorderRadius(newVal, oldVal) {
        console.log(`${this.chartName}barBorderRadius[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      labelShow(newVal, oldVal) {
        console.log(`${this.chartName}labelShow[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      }
    },
    methods: {
      setOptions() {
        let [ legendData, seriesData, categoryData ] = [ this.chartData.legendData, this.chartData.seriesData, this.chartData.categoryData ]
        let [ seriesLabelPosition, seriesLabelShow, series ] = [ 'inside', false, [] ]
        let [ maxValue, minValue ] = [ 0, 0 ]

        if (this.barStack) {
          if (this.labelShow) {
            seriesLabelShow = true
            this.xAxisValue
              ? (seriesLabelPosition = 'insideRight')
              : (seriesLabelPosition = 'insideTop')
          }
        }

        if (legendData && legendData.length !== 0) {
          legendData.forEach((item, index) => {
            series.push({
              name: item,
              type: 'bar',
              barCategoryGap: this.barCategoryGap,
              label: {
                normal: {
                  show: seriesLabelShow,
                  position: seriesLabelPosition
                }
              },
              itemStyle: {
                normal: {
                  barBorderRadius: this.barBorderRadius,
                  color: this.colors[index]
                }
              },
              stack: this.barStack,
              data: seriesData[index],
              barMaxWidth: '20'
            })
            maxValue = getMaxValue(seriesData[index], maxValue)
            minValue = getMinValue(seriesData[index], minValue)
          })
        }

        let barOpt = this.returnAxisOptions(legendData, categoryData, series, maxValue, minValue)

        console.log('barOpt', barOpt)

        return barOpt
      }
    }
  }
</script>

<style scoped></style>
