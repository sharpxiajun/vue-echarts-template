<template>
  <div class="full-block">
    <ECharts :options="barOption" auto-resize></ECharts>
  </div>
</template>

<script>
  import chartColors from 'constants/chartColors'
  import { AxisOpt, tooltipOpt, legendOpt, valueConvertWithUnit, xAxisValueOpt } from 'constants/chartConfig'
  import { getMaxValue, getMinValue } from 'constants/utils'
  import ECharts from 'vue-echarts/components/ECharts'
  import echarts from 'echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/legendScroll'
  import 'echarts/lib/component/title'

  export default {
    name: 'barChart',
    components: { ECharts },
    props: {
      barData: {
        type: Object,
        default: function() {
          return {
            legendData: ['某某接入分类'],
            seriesData: [[16672, 14345, 19876, 22098]],
            categoryData: ['IDC', 'IRCS', 'CDN', 'DNS']
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.colors
      },
      rotate: {
        type: Number,
        default: 0
      },
      xAxisValue: {
        type: Boolean,
        default: false
      },
      barStack: {
        type: Boolean,
        default: false
      },
      legendShow: {
        type: Boolean,
        default: true
      },
      legendOrient: {
        type: String,
        default: 'horizontal'
      },
      legendType: {
        type: String,
        default: 'plain'
      },
      legendLeft: {
        type: [String, Number],
        default: () => ''
      },
      legendTop: {
        type: [String, Number],
        default: () => ''
      },
      legendRight: {
        type: [String, Number],
        default: () => ''
      },
      legendBottom: {
        type: [String, Number],
        default: () => ''
      },
      barCategoryGap: {
        type: String,
        default: '40%'
      },
      labelLimit: {
        type: Boolean,
        default: false
      },
      labelLimitWidth: {
        type: Number,
        default: 100
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
        barOption: {}
      }
    },
    created() {
      this.barOption = this.barMethod(
        this.barData.legendData,
        this.barData.seriesData,
        this.barData.categoryData
      )
    },
    mounted() {

    },
    watch: {
      barData(newVal, oldVal) {
        console.log('barData', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      rotate(newVal, oldVal) {
        console.log('rotate', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      xAxisValue(newVal, oldVal) {
        console.log('xAxisValue', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      legendShow(newVal, oldVal) {
        console.log('legendShow', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      legendOrient(newVal, oldVal) {
        console.log('legendOrient', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      legendLeft(newVal, oldVal) {
        console.log('legendLeft', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      colors(newVal, oldVal) {
        console.log('colors', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      },
      barStack(newVal, oldVal) {
        console.log('barStack', newVal, oldVal, arguments)
        this.barOption = this.barMethod(
          this.barData.legendData,
          this.barData.seriesData,
          this.barData.categoryData
        )
      }
    },
    methods: {
      barMethod(legendData, seriesData, categoryData) {
        let seriesLabelPosition = 'inside'
        let seriesLabelShow = false
        if (this.barStack) {
          if (this.labelShow) {
            seriesLabelShow = true
            this.xAxisValue
              ? (seriesLabelPosition = 'insideRight')
              : (seriesLabelPosition = 'insideTop')
          }
        }

        const series = []
        let maxValue = 0, minValue = 0
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
        let barOption = {
          tooltip: {
            ...tooltipOpt('axis')
          },
          legend: {
            ...legendOpt(
              this.legendLeft,
              this.legendTop,
              this.legendRight,
              this.legendBottom,
              this.legendType,
              this.legendOrient
            ),
            show: this.legendShow,
            data: legendData,
            textStyle: {
              color: chartColors.whiteColor
            }
          },
          ...AxisOpt(chartColors, this.rotate, this.xAxisValue, this.legendShow),
          series: series
        }
        if (this.xAxisValue) {
          barOption.yAxis.data = categoryData
          barOption.yAxis.axisLabel.interval = 0
          if (this.labelLimit) {
            barOption.yAxis.axisLabel.formatter = name => {
              return echarts.format.truncateText(name, this.labelLimitWidth)
            }
          }
        } else {
          barOption.xAxis.data = categoryData
          barOption.xAxis.axisLabel.interval = 0
          if (this.labelLimit) {
            barOption.xAxis.axisLabel.formatter = name => {
              return echarts.format.truncateText(name, this.labelLimitWidth)
            }
          }
        }
        if (maxValue > 10000 || minValue < -10000) { //添加单位
          if (this.xAxisValue) {
            barOption.grid.right += 20
            xAxisValueOpt(barOption.xAxis, maxValue, minValue)
          } else {
            barOption.yAxis.axisLabel.formatter = valueConvertWithUnit
          }
        }
        return barOption
      }
    }
  }
</script>

<style scoped>

</style>
