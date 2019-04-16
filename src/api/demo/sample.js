// 获取实例页面的树数据
import basicBarChart from 'views/charts/bars/basicBarChart'

export const sampleTree = () => {
  return [{
    code: 'chartDesc',
    label: '图表实例说明',
    component: basicBarChart
  }, {
    label: '柱状图',
    code: 'bar',
    children: [{
      code: 'basicBar',
      label: '基础柱状图',
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
      label: '基础折线图'
    }, {
      code: 'gradualLine',
      label: '渐变色折线图'
    }]
  }, {
    code: 'pie',
    label: '饼状图',
    children: [{
      code: 'basicPie',
      label: '基础饼状图'
    }, {
      code: 'gradualPie',
      label: '渐变色饼状图'
    }]
  }, {
    code: 'radar',
    label: '雷达图',
    children: [{
      code: 'basicRadar',
      label: '基础雷达图'
    }, {
      code: 'radar1',
      label: '特色雷达图'
    }]
  }, {
    code: 'map',
    label: '地图',
    children: [{
      code: 'basicMap',
      label: '基础地图'
    }, {
      code: 'shadowMap',
      label: '阴影地图'
    }]
  }, {
    code: 'sunburst',
    label: '旭日图',
    children: [{
      code: 'basicSunburst',
      label: '基础旭日图'
    }, {
      code: 'sunburst1',
      label: '特色旭日图'
    }]
  }, {
    code: 'graph',
    label: '关系图',
    children: [{
      code: 'basicGraph',
      label: '基础关系图'
    }, {
      code: 'graph1',
      label: '自定义图标关系图'
    }]
  }, {
    code: 'scatter',
    label: '散点图',
    children: [{
      code: 'basicScatter',
      label: '基础散点图'
    }, {
      code: 'scatter1',
      label: '特色散点图'
    }]
  }, {
    code: 'earth',
    label: '3D地球',
    children: [{
      code: 'basicEarth',
      label: '基础3D地球'
    }, {
      code: 'earth1',
      label: '特色3D地球'
    }]
  }, {
    code: 'custom',
    label: '自定义图表',
    children: [{
      code: 'custom1',
      label: '自定义图表-特色'
    }, {
      code: 'custom2',
      label: '自定义图表-导航地图'
    }, {
      code: 'custom1',
      label: '自定义图表-导航地图1'
    }]
  }]
}
