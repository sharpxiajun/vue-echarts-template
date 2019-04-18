export default {
  colors: ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78'],
  barColors: ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78'],
  barLinearColors: ['#00fdc4', '#0083fe', '#f253ff', '#5286ff', '#41daf5', '#7f64ff'],
  lineColors: ['rgba(86,196,249,1)', 'rgba(34,45,143,1)', 'rgba(213,82,84,1)', 'rgba(171,66,197,1)'],
  lineAreaColors: ['rgba(86,196,249,.2)', 'rgba(34,183,197,.2)', 'rgba(213,82,84,.2)', 'rgba(171,66,197,.2)'],
  outsidePieColor: '#1B2E37',
  outsidePieShadowColor: '#40858F',
  activePieFontColor: '#C24E5E',
  scatterColors: ['#3CC7FF', '#ff6600', '#ff0000', '#ffe400', '#ff6600'],
  pieColors: ['#da5df9', '#fbee64', '#fe9464', '#35e6ca', '#07dcfe', '#389aff', '#6e6aff', '#ff759f', '#2edd8e', '#9ea3ff', '#ff455a', '#b09d63'],
  mapVisualColors: ['#3150e9', '#89adc5', '#9cbdff', '#fff'],
  pieGradualColor: [{color0: '#009ae7', color1: '#72ccdb'}, {color0: '#f06bad', color1: '#e288f5'}, {color0: '#f8bd0c', color1: '#d8db72'}, {color0: '#009ae7', color1: '#8ca7e7'}, {color0: '#8cc76b', color1: '#bcbe36'}, {color0: '#fe2c00', color1: '#fe8d01'}, {color0: '#72ccdb', color1: '#9af5d6'}, {color0: '#9a6af2', color1: '#e288f5'}, {color0: '#009ae7', color1: '#a2b5e1'}, {color0: '#006cfd', color1: '#02d0d0'}, {color0: '#fb7204', color1: '#fbb88d'}, {color0: '#fa8e3f', color1: '#f1ee08'}],
  legendLabelColor: '#000',
  whiteColorTransparent: 'rgba(255, 255, 255, 0)',
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  axisLabel: '#000',
  axisLine: '#4d5897',
  axisSplitLine: '#31396c',
  axisSplitArea: '#f9f9f9',
  pieAutoPlayNumColor: '#20fd07',
  pieAutoPlayTextColor: '#000',
  radarsplitAreaColor: 'rgba(7, 157, 234, 0.06)',
  radarAreaStyleNormal: 'rgba(7, 157, 234, 0.3)',
  radarAreaStyleEmphasis: 'rgba(7, 157, 234, 0.5)',
  radarNameColor: '#c0d4da',
  radarSplitLine: [
    'rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.40)',
    'rgba(255, 255, 255, 0.55)', 'rgba(255, 255, 255, 0.70)',
    'rgba(255, 255, 255, 0.85)', 'rgba(255, 255, 255, 1)'
  ].reverse(),
  radarAxisLine: 'rgba(255, 255, 255, 0.2)',
  gaugeColors: ['rgba(46, 101, 149, 1)', 'rgba(46, 101, 149, 0.8)', 'rgba(46, 101, 149, 0.4)', '#fd666d', '#67e0e3', '#37a2da'], //gaugeBtnColors,gaugeBtnBorderColor,gaugeBtnShadowColor,gaugeColors
  gaugeBtnColors: 'rgba(46, 101, 149, 1)',
  gaugeBtnBorderColor: 'rgba(46, 101, 149, 0.8)',
  gaugeBtnShadowColor: 'rgba(46, 101, 149, 0.4)',
  mapColors: ['rgba(0, 86, 235, 1)', '#2f8cff', '#4cb4ed', '#4ddffc', '#df3e22', '#2cfb0a'], //mapItemAreaColor,mapItemHoverareaColor,mapItemborderColor,effectScatterItemColor,mapLineColor
  mapItemAreaColor: '#3CC7FF',
  mapItemHoverareaColor: '#389BB7',
  mapItemborderColor: '#389BB7',
  mapLineColor: '#ffa022',
  effectScatterItemColor: '#2856E9',
  polarLinearColor: ['#28edb3', '#0e76c7', '#126eff', '#19e5e3', '#0fc0c7', '#84f984'],
  polarShadowColor: 'rgba(29,170,206,0.4)',
  polarAxisSplitLine: '#97c6ff',
  graphColors: ['#C23531', '#4f52dc', '#C78620', '#5a99eb', '#37a2da', '#6348d0'],
  pieBgColor: '#2a82be',
  pieShadowColor: 'rgba(40, 40, 40, 0.5)',
  barLinearColor: ['#fde177', '#fdac62', '#71eee7', '#44dcd9', '#82f885', '#11c1c6'],
  dataZoomColor: {handleColor: '#125ba1', backgroundColor: 'rgba(18,91,161,0)', fillerColor: 'rgba(18,91,161,0.5)', textColor: '#9ae2fe'},
  rosePieColors: ['#6eedd5', '#ebdf65', '#fa8079', '#9ee9ff', '#806ead', '#ef69ee', '#eda56a', '#6a8eee', '#85d679', '#a76ef4']
}

// 柱状图渐变颜色
export function barColor(color1, color2, x = 1, y = 0, x2 = 0, y2 = 0) {
  return {
    type: 'linear',
    x: x,
    y: y,
    x2: x2,
    y2: y2,
    colorStops: [{
      offset: 0,
      color: color1 // 0% 处的颜色
    }, {
      offset: 1,
      color: color2 // 100% 处的颜色
    }]
  }
}

// 折线图区域渐变色
export function lineAreaColor(color1, color2, x = 0, y = 0, x2 = 0, y2 = 1) {
  return {
    type: 'linear',
    x: x,
    y: y,
    x2: x2,
    y2: y2,
    colorStops: [{
      offset: 0,
      color: color1 // 0% 处的颜色
    }, {
      offset: 1,
      color: color2 // 100% 处的颜色
    }]
  }
}
