<template>

</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import ECharts from 'vue-echarts/components/ECharts'
  import chartColors from 'constants/chartColors'

  export default {
    name: 'pieChart',
    components: { ECharts },
    mixins: [ globalChartMixin ],
    props: {
      chartData: {
        type: Object,
        default: () => {
          return {
            pieName: '访问来源',
            seriesData: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
           ]
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.lineColors
      },
    }
  }
</script>

<style scoped>

</style>
