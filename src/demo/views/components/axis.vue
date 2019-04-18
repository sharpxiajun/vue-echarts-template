<template>
  <div class='axis'>
    <el-form label-suffix="：" label-width="100">
      <el-row>
        <el-col :span="8">
          <el-form-item label="rotate">
            <el-select v-model="rotate" size="mini" placeholder="旋转坐标轴文字角度">
              <el-option v-for="(item, ind) in rotateList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="xAxisValue">
            <el-radio-group v-model="xAxisValue" size="mini">
              <el-radio v-for="(item, ind) in xAxisValueList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="axisType">
            <el-radio-group v-model="axisType" size="mini">
              <el-radio v-for="(item, ind) in axisTypeList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="labelLimit">
            <el-radio-group v-model="labelLimit" size="mini">
              <el-radio v-for="(item, ind) in labelLimitList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="labelLimitWidth" v-if="labelLimit">
            <div class="flex-layout">
              <div class="mr-20">
                <el-input v-model="labelLimitWidth" readonly>
                  <i class="el-icon-edit el-input__icon" slot="suffix" @click="iconClick"></i>
                </el-input>
              </div>
              <div class="flex-1" v-if="sliderShow">
                <el-slider v-model="labelLimitWidth" :min="80" :max="500" ></el-slider>
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="xSplitLineShow">
            <el-radio-group v-model="xSplitLineShow" size="mini">
              <el-radio-button v-for="(item, ind) in xSplitLineList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="ySplitLineShow">
            <el-radio-group v-model="ySplitLineShow" size="mini">
              <el-radio-button v-for="(item, ind) in ySplitLineList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="xSplitLineShow || ySplitLineShow">
          <el-form-item label="axisSplitLineColor">
           
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import chartColors from 'constants/chartColors'
// import { Sketch } from 'vue-color'
export default {
  name: 'Axis',
  props: {},
  components: {},
  data() {
    return {
      rotate: 0,
      xAxisValue: false,
      axisType: 'value',
      labelLimit: false,
      labelLimitWidth: 100,
      axisSplitLineColor: chartColors.axisSplitLine,
      axisLineColor: chartColors.axisLine,
      axisLabelColor: chartColors.axisLabel,
      xSplitLineShow: false,
      ySplitLineShow: false,
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
      sliderShow: false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    iconClick() {
      this.sliderShow = !this.sliderShow
    }
  }
}
</script>
<style lang='less' scoped>
</style>