import chartColors from 'constants/chartColors'

export default {
  props: {
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
    legendTextColor: {
      type: String,
      default: () => chartColors.legendLabelColor
    }
  },
  data() {
    return {
      chartName: '注意：没有给图表制定名称，请及时补充图表名称.........',
      options: {}
    }
  },
  created() {
    console.log(`准备构建图表组件${this.chartName}`)
  },
  mounted() {
    this.refresh()
  },
  watch: {
    legendShow() {
      console.log(`${this.chartName}legendShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendOrient() {
      console.log(`${this.chartName}legendOrient[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendType() {
      console.log(`${this.chartName}legendType[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendLeft() {
      console.log(`${this.chartName}legendLeft[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendTop() {
      console.log(`${this.chartName}legendTop[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendRight() {
      console.log(`${this.chartName}legendRight[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendBottom() {
      console.log(`${this.chartName}legendBottom[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    legendTextColor() {
      console.log(`${this.chartName}legendTextColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    }
  },
  methods: {
    refresh() {
      this.options = this.setOptions()
      if (this.refreshCallback) {
        this.refreshCallback()
      }
    },
    legendOpt(opt) {
      let [ left, top, right, bottom, type, orient ] = [ this.legendLeft || 'auto', this.legendTop || 'auto', this.legendRight || 'auto', this.legendBottom || 'auto', this.legendType || 'plain', this.legendOrient || 'horizontal' ]
      return {
        type: type,
        orient: orient,
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        ...opt
      }
    },
    createTplCode(zjNm, imNm) {
      let propsKeys = Object.keys(this._props).map((_) => `:${_}="chartParams.${_}"`)
      console.log(`<${zjNm}  ${propsKeys.join(' ')}></${zjNm}>`)
    }
  }
}
