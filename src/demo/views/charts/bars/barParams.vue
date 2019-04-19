<template>
  <div class='bar-params'>
    <el-form label-suffix="：" v-model="bar" label-width="100">
      <el-row>
        <el-col :span="8">
          <el-form-item label="labelShow">
            <el-radio-group v-model="bar.labelShow" size="mini">
              <el-radio-button v-for="(item, ind) in labelShowList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="barStack">
            <el-radio-group v-model="bar.barStack" size="mini">
              <el-radio v-for="(item, ind) in barStackList" :key="ind" :label="item.value" :value="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="colors">
            <div class="input-color">
              <el-input v-model="bar.colors" readonly>
                <el-button slot="prepend" class="el-icon-delete" @click="resetColors"></el-button>
                <el-button slot="append" class="icon iconfont iconyanse" v-popover:colorsPicker></el-button>
              </el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="barBorderRadius">
          <div class="flex-layout num-str">
            <div class="input-box input-box2">
              <el-input v-model="bar.barBorderRadius" readonly></el-input>
            </div>
            <div class="radio-box">
              <el-radio-group v-model="radiusType" size="mini" @change="changeRadius">
                <el-radio-button :label="item.value" v-for="item in radiusList" :key="item.value">{{item.label}}</el-radio-button>
              </el-radio-group>
            </div>
            <div class="flex-1">
              <el-slider v-model="borderRadiusNum" @change="borderRadiusSlider(borderRadiusNum, radiusType)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="barCategoryGap">
            <div class="flex-layout num-str">
              <div class="input-box">
                <el-input v-model="bar.barCategoryGap" readonly></el-input>
              </div>
              <div class="radio-box radio-box2">
                <el-radio-group v-model="categoryGap" size="mini" @change="changeCategoryGap">
                  <el-radio :label="item.value" v-for="item in categoryGapList" :key="item.value">{{item.label}}</el-radio>
                </el-radio-group>
              </div>
              <div class="flex-1">
                <el-slider v-model="categoryGapNum" @change="categoryGapSlider(categoryGap, categoryGapNum)"></el-slider>
              </div>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          
        </el-col>
      </el-row>
    </el-form>
    <el-popover ref="colorsPicker" placement="bottom" width="220" trigger="hover" v-model="colorsPickerShow">
      <ColorsPicker :isArray="true" @colorCancel="colorCancel" @colorNext="colorNext" @colorOK="colorOK"></ColorsPicker>
    </el-popover>
  </div>
</template>

<script>
import chartColors from 'constants/chartColors'
import ColorsPicker from 'components/colorsPicker'
export default {
  name: 'BarParams',
  props: {},
  components: { ColorsPicker },
  data() {
    return {
      bar: {
        colors: chartColors.barColors.join(','),
        labelShow: false,
        barStack: false,
        barCategoryGap: '40%',
        barBorderRadius: '0, 0, 0, 0'
      },
      labelShowList: [
        {label: '显示数量', value: true},
        {label: '隐藏数量', value: false}
      ],
      barStackList: [
        {label: '水平放置', value: false},
        {label: '堆叠放置', value: true}
      ],
      categoryGapNum: 0,
      categoryGap: 'percent',
      categoryGapList: [
        {label: '百分比', value: 'percent'}
        // {label: '数值', value: 'num'}
      ],
      colorsPickerShow: false,
      borderRadiusNum: 0,
      radius: [0, 0, 0, 0],
      radiusType: 'left-top',
      radiusList: [
        {label: '左上角', value: 'left-top'},
        {label: '右上角', value: 'right-top'},
        {label: '右下角', value: 'right-bottom'},
        {label: '左下角', value: 'left-bottom'}
      ]
    }
  },
  watch: {
    bar: {
      deep: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, 'newVal=========')
        this.$emit('barData', newVal)
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    changeCategoryGap() {
      this.categoryGapNum = 0
    },
    categoryGapSlider(type, value) {
      type === 'percent' ? this.bar.barCategoryGap = value.toString() + '%' : this.bar.barCategoryGap = value
    },
    resetColors() {
      this.colors = ''
      this.bar.colors = []
    },
    colorCancel(boolean) {
      this.colorsPickerShow = boolean
    },
    colorNext(colors) {
      this.bar.colors = colors
      this.colorsPickerShow = false
    },
    colorOK(colors) {
      this.bar.colors = colors
      this.colorsPickerShow = false
    },
    changeRadius(item) {
      this.borderRadiusNum = 0
    },
    borderRadiusSlider(value, type) {
      type === 'left-top' ? this.radius[0] = this.borderRadiusNum : type === 'right-top' ? this.radius[1] = this.borderRadiusNum : type === 'right-bottom' ? this.radius[2] = this.borderRadiusNum : this.radius[3] = this.borderRadiusNum
      this.bar.barBorderRadius = this.radius.join(',')
    }
  }
}
</script>
<style lang='less' scoped>
</style>