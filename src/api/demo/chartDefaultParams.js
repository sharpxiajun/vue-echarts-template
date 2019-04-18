export const defaultLine = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'rotate': 0,
      'xAxisValue': true,
      'axisType': 'value',
      'axisSplitLineColor': '#31396c',
      'axisLineColor': '#4d5897',
      'labelLimit': false,
      'labelLimitWidth': 100,
      'axisLabelColor': '#000',
      'xSplitLineShow': false,
      'ySplitLineShow': false,
      'chartData': {
        'legendData': ['告警事件', '其他事件', '很多事件'],
        'seriesData': [[1432, 1568, 1125, 1359, 1654, 1852, 1523, 1369, 1459, 1854, 1635, 1364], [432, 568, 125, 359, 654, 852, 523, 369, 459, 854, 635, 364], [2432, 2568, 2125, 2359, 2654, 2852, 2523, 2369, 2459, 2854, 2635, 2364]],
        'categoryData': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      'colors': ['rgba(86,196,249,1)', 'rgba(34,45,143,1)', 'rgba(213,82,84,1)', 'rgba(171,66,197,1)'],
      'custom': false,
      'smooth': false,
      'markLineAverage': false,
      'markLineAverageLabel': '平均值',
      'showLineArea': true,
      'interval': 'auto',
      'logBase': 10,
      'areaColors': []
    }
  }
}

export const defaultBar = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'rotate': 0,
      'xAxisValue': false,
      'axisType': 'value',
      'axisSplitLineColor': '#31396c',
      'axisLineColor': '#4d5897',
      'labelLimit': false,
      'labelLimitWidth': 100,
      'axisLabelColor': '#000',
      'xSplitLineShow': false,
      'ySplitLineShow': false,
      'chartData': {
        'legendData': ['IP'],
        'seriesData': [[16672, 14345, 19876, 22098]],
        'categoryData': ['IDC', 'IRCS', 'CDN', 'DNS']
      },
      'colors': ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78'],
      'barStack': false,
      'barCategoryGap': '40%',
      'barBorderRadius': 0,
      'labelShow': false
    }
  }
}

export const defaultPie = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'chartData': {
        'legendData': ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        'seriesData': [{'value': 335, 'name': '直接访问'}, {'value': 310, 'name': '邮件营销'}, {
          'value': 234,
          'name': '联盟广告'
        }, {'value': 135, 'name': '视频广告'}, {'value': 1548, 'name': '搜索引擎'}]
      },
      'colors': ['#da5df9', '#fbee64', '#fe9464', '#35e6ca', '#07dcfe', '#389aff', '#6e6aff', '#ff759f', '#2edd8e', '#9ea3ff', '#ff455a', '#b09d63'],
      'pieName': '分布情况',
      'seriesLabelShow': true,
      'pieAutoPlay': true,
      'center': ['50%', '50%'],
      'radius': ['40%', '55%'],
      'showPercent': false,
      'pieAutoPlayNumStyle': {'color': '#20fd07', 'fontSize': '22', 'fontWeight': 'bold'},
      'pieAutoPlayTextStyle': {'color': '#000', 'fontSize': '14', 'fontWeight': 'bold'},
      'showRatio': true,
      'seriesLabelEmphasisShow': true
    }
  }
}

export const defaultMap = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'chartData': {
        'seriesData': [{'name': '北京', 'value': 177}, {'name': '天津', 'value': 42}, {
          'name': '河北',
          'value': 102
        }, {'name': '山西', 'value': 81}, {'name': '内蒙古', 'value': 47}, {'name': '辽宁', 'value': 67}, {
          'name': '吉林',
          'value': 82
        }, {'name': '黑龙江', 'value': 66}, {'name': '上海', 'value': 24}, {'name': '江苏', 'value': 92}, {
          'name': '浙江',
          'value': 114
        }, {'name': '安徽', 'value': 109}, {'name': '福建', 'value': 116}, {'name': '江西', 'value': 91}, {
          'name': '山东',
          'value': 119
        }, {'name': '河南', 'value': 137}, {'name': '湖北', 'value': 116}, {'name': '湖南', 'value': 114}, {
          'name': '重庆',
          'value': 91
        }, {'name': '四川', 'value': 125}, {'name': '贵州', 'value': 62}, {'name': '云南', 'value': 83}, {
          'name': '西藏',
          'value': 9
        }, {'name': '陕西', 'value': 80}, {'name': '甘肃', 'value': 56}, {'name': '青海', 'value': 10}, {
          'name': '宁夏',
          'value': 18
        }, {'name': '新疆', 'value': 67}, {'name': '广东', 'value': 123}, {'name': '广西', 'value': 59}, {
          'name': '海南',
          'value': 14
        }]
      },
      'colors': ['rgba(0, 86, 235, 1)', '#2f8cff', '#4cb4ed', '#4ddffc', '#df3e22', '#2cfb0a'],
      'dataTitle': ['告警事件'],
      'tooltipFormatter': '告警事件',
      'mapType': 'china',
      'mapZoom': 1.1,
      'symbolSize': 50,
      'symbolOffset': ['0%', '0%'],
      'layoutCenter': ['52%', '45%'],
      'showTooltip': true
    }
  }
}

export const defaultScatter = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'rotate': 0,
      'xAxisValue': false,
      'axisType': 'value',
      'axisSplitLineColor': '#31396c',
      'axisLineColor': '#4d5897',
      'labelLimit': false,
      'labelLimitWidth': 100,
      'axisLabelColor': '#000',
      'xSplitLineShow': false,
      'ySplitLineShow': false,
      'chartData': {
        'legendData': ['传播数量统计'],
        'seriesData': [[[133119620, 31, 'www.58wg.co/'], [69355780, 25, 'm.yiqixiegushi.com/'], [54617180, 29, 'api-laxin.1sapp.com/'], [51598260, 32, '7xiav1.com2.z0.glb.qiniucdn.com/'], [43583280, 22, 'an.res.taozuiredian.com/'], [40691743, 12, 'yd8.jianzhousc.com/'], [40186091, 22, 'cdn.voole.com:3580/mp4'], [33400235, 15, '527575.com/kj.html'], [4386543, 21, 'css.c7k7.com/'], [4384227, 30, 'www.244500.com/'], [4377613, 26, 'www.bturl.cc/'], [4362099, 24, 'baicizhan.qiniucdn.com/'], [4337705, 18, 'img.sique.com/']]]
      },
      'colors': ['#3CC7FF', '#ff6600', '#ff0000', '#ffe400', '#ff6600']
    }
  }
}
