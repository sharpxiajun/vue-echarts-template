<template>
  <div class="full-block">
    <ECharts :options="options" auto-resize></ECharts>
  </div>
</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import ECharts from 'vue-echarts/components/ECharts'
  import chartColors from 'constants/chartColors'

  export default {
    name: 'graphChart',
    components: {ECharts},
    mixins: [globalChartMixin],
    props: {
      chartData: {
        type: Object,
        default: () => {
          return {
            legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            seriesData: [
              {id: '1', name: '直接访问1', value: 10, node: 0},
              {id: '2', name: '邮件营销1', value: 10, node: 1},
              {id: '3', name: '联盟广告1', value: 10, node: 1},
              {id: '4', name: '视频广告1', value: 10, node: 1},
              {id: '5', name: '搜索引擎1', value: 10, node: 1},
              {id: '6', name: '直接访问2', value: 10, node: 2},
              {id: '7', name: '邮件营销2', value: 10, node: 2},
              {id: '8', name: '联盟广告2', value: 10, node: 2},
              {id: '9', name: '视频广告2', value: 10, node: 2},
              {id: '10', name: '搜索引擎2', value: 10, node: 3},
              {id: '11', name: '直接访问3', value: 10, node: 3},
              {id: '12', name: '邮件营销3', value: 10, node: 4},
              {id: '13', name: '联盟广告3', value: 10, node: 4},
              {id: '14', name: '视频广告3', value: 10, node: 5},
              {id: '15', name: '搜索引擎3', value: 10, node: 5}
            ],
            seriesLinkData: [
              {target: '2', source: '1'},
              {target: '3', source: '1'},
              {target: '4', source: '1'},
              {target: '5', source: '1'},
              {target: '6', source: '5'},
              {target: '10', source: '5'},
              {target: '12', source: '5'},
              {target: '14', source: '5'},
              {target: '13', source: '4'},
              {target: '15', source: '4'},
              {target: '9', source: '3'},
              {target: '11', source: '3'},
              {target: '7', source: '2'},
              {target: '8', source: '2'}
            ]
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.graphColors
      },
      centerPoint: {
        type: String,
        default: '邮件营销1'
      },
      symbolType: {
        type: String,
        default: 'circle'
      },
      graphLineColor: {
        type: String,
        default: chartColors.axisLine
      },
      graphTextColor: {
        type: String,
        default: chartColors.graphTextColor
      },
      setItemColor: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        chartName: '[关系图模板]'
      }
    },
    mounted() {
      this.createTplCode('GraphChart')
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
      centerPoint(newVal, oldVal) {
        console.log(`${this.chartName}centerPoint[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      symbolType(newVal, oldVal) {
        console.log(`${this.chartName}symbolType[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      graphTextColor(newVal, oldVal) {
        console.log(`${this.chartName}graphTextColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      graphLineColor(newVal, oldVal) {
        console.log(`${this.chartName}graphLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      setItemColor(newVal, oldVal) {
        console.log(`${this.chartName}setItemColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      }
    },
    methods: {
      setOptions() {
        let that = this
        let [seriesData, seriesLinkData, categoriesData, legendData] = [this.chartData.seriesData, this.chartData.seriesLinkData, this.chartData.legendData, []]
        if (categoriesData && categoriesData.length !== 0) {
          categoriesData.map(function(a) {
            legendData.push({
              name: a.name,
              icon: that.symbolType
            })
          })
        }
        let graphOpts = {
          color: this.colors,
          tooltip: { show: false },
          legend: [
            {
              ...this.legendOpt(
                this.legendLeft,
                this.legendTop,
                this.legendRight,
                this.legendBottom,
                this.legendType,
                this.legendOrient
              ),
              show: this.legendShow,
              textStyle: {
                color: this.legendTextColor
              },
              data: legendData
            }
          ],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          animation: true,
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbol: this.symbolType,
              symbolSize: 50,
              roam: true, //禁止用鼠标滚轮缩小放大效果
              focusNodeAdjacency: true, //划过只显示对应关系
              lineStyle: {
                normal: {
                  opacity: 1,
                  width: 1,
                  curveness: 0.3,
                  color: this.graphLineColor
                }
              },
              // 圆圈内的文字
              label: {
                normal: {
                  show: true,
                  color: this.graphTextColor,
                  formatter: function(params) {
                    return params.name
                  }
                }
              },
              emphasis: {
                label: {
                  show: false
                }
              },
              force: {
                repulsion: 350
              },
              data: seriesData,
              categories: categoriesData,
              links: seriesLinkData
            }
          ]
        }

        return graphOpts
      }
    }
  }
</script>

<style scoped>

</style>
