import chartColors from 'constants/chartColors'
import echarts from 'echarts'

export default {
  props: {
    rotate: {
      type: Number,
      default: 0
    },
    xAxisValue: {
      type: Boolean,
      default: false
    },
    axisType: {
      type: String,
      default: 'value'
    },
    axisSplitLineColor: {
      type: String,
      default: chartColors.axisSplitLine
    },
    axisLineColor: {
      type: String,
      default: chartColors.axisLine
    },
    labelLimit: {
      type: Boolean,
      default: false
    },
    labelLimitWidth: {
      type: Number,
      default: 100
    },
    axisLabelColor: {
      type: String,
      default: chartColors.axisLabel
    },
    xSplitLineShow: {
      type: Boolean,
      default: false
    },
    ySplitLineShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  watch: {
    rotate(newVal, oldVal) {
      console.log(`${this.chartName}rotate[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    xAxisValue(newVal, oldVal) {
      console.log(`${this.chartName}xAxisValue[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisType(newVal, oldVal) {
      console.log(`${this.chartName}axisType[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisSplitLineColor(newVal, oldVal) {
      console.log(`${this.chartName}axisSplitLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisLineColor(newVal, oldVal) {
      console.log(`${this.chartName}axisLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    labelLimit(newVal, oldVal) {
      console.log(`${this.chartName}labelLimit[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    labelLimitWidth(newVal, oldVal) {
      console.log(`${this.chartName}labelLimitWidth[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisLabelColor(newVal, oldVal) {
      console.log(`${this.chartName}axisLabelColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    xSplitLineShow(newVal, oldVal) {
      console.log(`${this.chartName}xSplitLineShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    ySplitLineShow(newVal, oldVal) {
      console.log(`${this.chartName}ySplitLineShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    }
  },
  methods: {
    axisOpt() {
      let [ xAxisType, yAxisType, gridTop, gridBottom ] = [ '', '', '', 5 ]
      if (this.xAxisValue) {
        xAxisType = 'value'
        yAxisType = 'category'
      } else {
        xAxisType = 'category'
        yAxisType = 'value'
      }
      this.legendShow ? gridTop = 30 : gridTop = 10
      return {
        grid: {
          top: gridTop,
          left: 10,
          right: 20,
          bottom: gridBottom,
          containLabel: true
        },
        xAxis: {
          type: xAxisType,
          splitLine: {
            show: this.xSplitLineShow,
            lineStyle: {
              width: 1,
              type: 'dotted',
              color: this.axisSplitLineColor
            }
          },
          axisTick: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: this.axisLineColor
            },
            symbol: ['none', 'arrow']
          },
          axisLabel: {
            show: true,
            color: this.axisLabelColor,
            rotate: this.rotate
          }
        },
        yAxis: {
          type: yAxisType,
          splitLine: {
            show: this.ySplitLineShow,
            lineStyle: {
              width: 1,
              type: 'dotted',
              color: this.axisSplitLineColor
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: this.axisLabelColor
            }
          },
          axisTick: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: this.axisLineColor
            },
            symbol: ['none', 'arrow']
          }
        }
      }
    },
    axisValueOpt(option, maxValue, minValue) {
      if (maxValue > 100000000 || minValue < -100000000) {
        option.name = '亿'
        option.axisLabel.formatter = (value) => {
          return value / 100000000
        }
      } else if (maxValue > 10000 || minValue < -10000) {
        option.name = '万'
        option.axisLabel.formatter = (value) => {
          return value / 10000
        }
      }
    },
    returnAxisOptions(legendData, categoryData, series, maxValue, minValue) {
      let chartOpts = {
        color: this.colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          ...this.legendOpt(),
          show: this.legendShow,
          data: legendData,
          textStyle: {
            color: this.legendTextColor
          }
        },
        ...this.axisOpt(),
        series: series
      }

      if (this.xAxisValue) {
        chartOpts.yAxis.data = categoryData
        chartOpts.yAxis.axisLabel.interval = 0
        if (this.labelLimit) {
          chartOpts.yAxis.axisLabel.formatter = name => {
            return echarts.format.truncateText(name, this.labelLimitWidth)
          }
        }
      } else {
        chartOpts.xAxis.data = categoryData
        chartOpts.xAxis.axisLabel.interval = 0
        if (this.labelLimit) {
          chartOpts.xAxis.axisLabel.formatter = name => {
            return echarts.format.truncateText(name, this.labelLimitWidth)
          }
        }
      }

      if (this.axisType === 'log') {
        this.xAxisValue
          ? (chartOpts.yAxis.logBase = this.logBase)
          : (chartOpts.xAxis.logBase = this.logBase)
      }

      // 数值过大，添加相应单位
      if (maxValue > 10000 || minValue < -10000) {
        //添加单位
        if (this.xAxisValue) {
          this.axisValueOpt(chartOpts.xAxis, maxValue, minValue)
        } else {
          this.axisValueOpt(chartOpts.yAxis, maxValue, minValue)
        }
      }

      return chartOpts
    }
  }
}
