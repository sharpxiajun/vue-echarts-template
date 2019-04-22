<template>
  <div class='axis'>
    <el-form inline v-model="axis" label-suffix="：" label-width="100">
      <el-row>
        <el-form-item label="rotate">
          <el-select v-model="axis.rotate" size="mini" placeholder="旋转坐标轴文字角度">
            <el-option v-for="(item, ind) in rotateList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="xAxisValue">
          <el-radio-group v-model="axis.xAxisValue" size="mini">
            <el-radio v-for="(item, ind) in xAxisValueList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="axisType">
          <el-radio-group v-model="axis.axisType" size="mini">
            <el-radio v-for="(item, ind) in axisTypeList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="axisLineColor">
          <div class="input-color">
            <el-input class="color-btn" v-model="axis.lineColor" readonly>
              <el-button slot="prepend" class="el-icon-delete" @click="resetLineColor"></el-button>
              <el-button slot="append" class="icon iconfont iconyanse" v-popover:lineColorPicker></el-button>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="axisLabelColor">
          <div class="input-color">
            <el-input class="color-btn" v-model="axis.labelColor" readonly>
              <el-button slot="prepend" class="el-icon-delete" @click="resetLabelColor"></el-button>
              <el-button slot="append" class="icon iconfont iconyanse" v-popover:labelColorPicker></el-button>
            </el-input>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="labelLimit">
          <el-radio-group v-model="axis.labelLimit" size="mini">
            <el-radio v-for="(item, ind) in labelLimitList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="labelLimitWidth">
          <div class="flex-layout">
            <div class="flex-1 mr-20">
              <el-input v-model="axis.labelLimitWidth" readonly :disabled="!axis.labelLimit">
              </el-input>
            </div>
            <div class="flex-1" v-if="axis.labelLimit">
              <el-slider v-model="axis.labelLimitWidth" :min="80" :max="500" ></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="xSplitLineShow">
          <el-radio-group v-model="axis.xSplitLineShow" size="mini">
            <el-radio-button v-for="(item, ind) in xSplitLineList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="ySplitLineShow">
          <el-radio-group v-model="axis.ySplitLineShow" size="mini">
            <el-radio-button v-for="(item, ind) in ySplitLineList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="axisSplitLineColor">
          <div class="input-color">
            <el-input class="color-btn" v-model="axis.splitLineColor" :disabled="!(axis.xSplitLineShow || axis.ySplitLineShow)" readonly>
              <el-button slot="prepend" class="el-icon-delete" @click="resetSplitLineColor"></el-button>
              <el-button slot="append" class="icon iconfont iconyanse" v-popover:splitLineColorPicker></el-button>
            </el-input>
          </div>
        </el-form-item>
      </el-row>
    </el-form>
    <el-popover ref="splitLineColorPicker" placement="bottom" width="220" trigger="hover" v-model="splitLineColorPickerShow" :disabled="!(axis.xSplitLineShow || axis.ySplitLineShow)">
      <ColorsPicker @colorCancel="splitLineColorCancel" @colorOK="splitLineColorOK"></ColorsPicker>
    </el-popover>
    <el-popover ref="lineColorPicker" placement="bottom" width="220" trigger="hover" v-model="lineColorPickerShow">
      <ColorsPicker @colorCancel="lineColorCancel" @colorOK="lineColorOK"></ColorsPicker>
    </el-popover>
    <el-popover ref="labelColorPicker" placement="bottom" width="220" trigger="hover" v-model="labelColorPickerShow">
      <ColorsPicker @colorCancel="labelColorCancel" @colorOK="labelColorOK"></ColorsPicker>
    </el-popover>
  </div>
</template>

<script>
import chartColors from 'constants/chartColors'
import ColorsPicker from 'components/colorsPicker'
export default {
  name: 'Axis',
  props: {},
  components: { ColorsPicker },
  data() {
    return {
      axis: {
        rotate: 0,
        xAxisValue: false,
        axisType: 'value',
        labelLimit: false,
        labelLimitWidth: 100,
        splitLineColor: chartColors.axisSplitLine,
        lineColor: chartColors.axisLine,
        labelColor: chartColors.axisLabel,
        xSplitLineShow: false,
        ySplitLineShow: false
      },
      rotateList: [
        {label: '0度', value: 0},
        {label: '30度', value: 30},
        {label: '45度', value: 45},
        {label: '60度', value: 60}
      ],
      xAxisValueList: [
        {label: '横纵坐标互换', value: true},
        {label: '横纵坐标不互换', value: false}
      ],
      labelLimitList: [
        {label: '限制文字宽度', value: true},
        {label: '不限制文字宽度', value: false}
      ],
      axisTypeList: [
        {label: '数值轴', value: 'value'},
        {label: '类目轴', value: 'category'}
      ],
      xSplitLineList: [
        {label: '显示x轴分割线', value: true},
        {label: '隐藏x轴分割线', value: false}
      ],
      ySplitLineList: [
        {label: '显示y轴分割线', value: true},
        {label: '隐藏y轴分割线', value: false}
      ],
      splitLineColorPickerShow: false,
      lineColorPickerShow: false,
      labelColorPickerShow: false
    }
  },
  watch: {
    axis: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.$emit('axisData', newVal)
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    splitLineColorCancel(boolean) {
      this.splitLineColorPickerShow = boolean
    },
    splitLineColorOK(colors) {
      this.axis.splitLineColor = colors
    },
    lineColorCancel(boolean) {
      this.lineColorPickerShow = boolean
    },
    lineColorOK(colors) {
      this.axis.lineColor = colors
    },
    labelColorCancel(boolean) {
      this.labelColorPickerShow = boolean
    },
    labelColorOK(colors) {
      this.axis.labelColor = colors
    },
    resetSplitLineColor() {
      if (this.axis.xSplitLineShow || this.axis.ySplitLineShow) {
        this.axis.splitLineColor = ''
      }
    },
    resetLineColor() {
      this.axis.lineColor = ''
    },
    resetLabelColor() {
      this.axis.labelColor = ''
    }
  }
}
</script>
<style lang='less' scoped>
</style>