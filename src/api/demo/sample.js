// 获取实例页面的树数据
import basicBarChart from 'views/charts/bars/basicBarChart'
import basicLineChart from 'views/charts/lines/basicLineChart'
import basicPieChart from 'views/charts/pies/basicPieChart'
import basicMapChart from 'views/charts/maps/basicMapChart'

export const sampleTree = () => {
  return [{
    label: '柱状图',
    code: 'bar',
    children: [{
      code: 'basicBar',
      label: '标准柱状图',
      component: basicBarChart
    }, {
      code: 'gradualBar',
      label: '渐变色柱状图'
    }, {
      code: 'shadowBar',
      label: '带阴影的柱状图'
    }]
  }, {
    code: 'line',
    label: '折线图',
    children: [{
      code: 'basicLine',
      label: '标准折线图',
      component: basicLineChart
    }, {
      code: 'gradualLine',
      label: '渐变色折线图'
    }]
  }, {
    code: 'pie',
    label: '饼状图',
    children: [{
      code: 'basicPie',
      label: '标准饼状图',
      component: basicPieChart
    }, {
      code: 'gradualPie',
      label: '渐变色饼状图'
    }]
  }, {
    code: 'radar',
    label: '雷达图',
    children: [{
      code: 'basicRadar',
      label: '标准雷达图'
    }]
  }, {
    code: 'map',
    label: '地图',
    children: [{
      code: 'basicMap',
      label: '标准地图',
      component: basicMapChart
    }, {
      code: 'shadowMap',
      label: '阴影地图'
    }]
  }, {
    code: 'sunburst',
    label: '旭日图',
    children: [{
      code: 'basicSunburst',
      label: '标准旭日图'
    }]
  }, {
    code: 'graph',
    label: '关系图',
    children: [{
      code: 'basicGraph',
      label: '标准关系图'
    }]
  }, {
    code: 'scatter',
    label: '散点图',
    children: [{
      code: 'basicScatter',
      label: '标准散点图'
    }]
  }, {
    code: 'earth',
    label: '3D地球',
    children: [{
      code: 'basicEarth',
      label: '贴图3D地球'
    }, {
      code: 'mapEarth',
      label: '映射3D地球'
    }]
  }, {
    code: 'custom',
    label: '自定义图表',
    children: [{
      code: 'custom1',
      label: 'XXXXX'
    }]
  }]
}
