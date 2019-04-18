<template>
  <div class='legend'>
    <el-form :model="legend" label-suffix="：" label-width="100">
      <el-row>
      <el-form-item label="legendShow">
        <el-radio-group v-model="legend.show" size="mini" @change="changeShow(legend.show)">
          <el-radio-button :label="item.value" v-for="item in booleanList" :key="item.value">{{item.label}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="legendType">
            <el-radio-group v-model="legend.type" :disabled="!legend.show" size="mini" @change="changeType(legend.type)">
              <el-radio-button :label="item.value" v-for="item in typeList" :key="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="legendOrient">
            <el-radio-group v-model="legend.orient" :disabled="!legend.show" size="mini" @change="changeOrient(legend.orient)">
              <el-radio-button :label="item.value" v-for="item in orientList" :key="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="legendTextColor">
            <div class="input-color">
              <el-input class="color-btn" v-model="legend.textColor" :disabled="!legend.show" readonly>
                <el-button slot="append" icon="el-icon-arrow-down" v-popover:colorsPicker></el-button>
              </el-input>
            </div>
            <!-- <div v-if="colorsPickerShow">
              <div style="text-align: center; margin: 0px 0px 10px 0px">
                <el-radio-group type="primary" v-model="colorModel" size="mini">
                  <el-radio-button label="HEX"></el-radio-button>
                  <el-radio-button label="RGBA"></el-radio-button>
                </el-radio-group>
              </div>
              <sketch-picker v-model="pickerColors"></sketch-picker>
              <div style="text-align: center; margin: 10px 0px 0px 0px">
                <el-button type="warning" size="mini" @click="colorCancel">取消</el-button>
                <el-button type="success" size="mini" @click="colorNext">连续</el-button>
                <el-button type="danger" size="mini" @click="colorOK">确定</el-button>
              </div>
            </div> -->
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="legendLeft">
          <div class="flex-layout">
            <div class="input-box">
              <el-input v-model="legend.left" readonly :disabled="!legend.show"></el-input>
            </div>
            <div class="radio-box">
              <el-radio-group v-model="left" @change="leftPos(left)" :disabled="!legend.show">
                <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
              </el-radio-group>
            </div>
            <div class="flex-1" v-if="choose.left">
              <el-slider v-model="num.left" v-if="left === 'percent'" @change="leftSlider(left, num.left)"></el-slider>
              <el-slider v-model="num.left" v-if="left === 'num'" @change="leftSlider(left, num.left)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="legendRight">
            <div class="flex-layout">
              <div class="input-box">
                <el-input v-model="legend.right" readonly :disabled="!legend.show">
                </el-input>
              </div>
              <div class="radio-box">
                <el-radio-group v-model="right" @change="rightPos(right)" :disabled="!legend.show">
                  <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
                </el-radio-group>
              </div>
              <div class="flex-1" v-if="choose.right">
                <el-slider v-model="num.right" v-if="right === 'percent'" @change="rightSlider(right, num.right)"></el-slider>
                <el-slider v-model="num.right" v-if="right === 'num'" @change="rightSlider(right, num.right)"></el-slider>
              </div>
            </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="legendTop">
          <div class="flex-layout">
            <div class="input-box">
              <el-input v-model="legend.top" readonly :disabled="!legend.show">
              </el-input>
            </div>
            <div class="radio-box">
              <el-radio-group v-model="top" @change="topPos(top)" :disabled="!legend.show">
                <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
              </el-radio-group>
            </div>
            <div class="flex-1" v-if="choose.top">
              <el-slider v-model="num.top" v-if="top === 'percent'" @change="topSlider(top, num.top)"></el-slider>
              <el-slider v-model="num.top" v-if="top === 'num'" @change="topSlider(top, num.top)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="legendBottom">
          <div class="flex-layout">
            <div class="input-box">
              <el-input v-model="legend.bottom" readonly :disabled="!legend.show">
              </el-input>
            </div>
            <div class="radio-box">
              <el-radio-group v-model="bottom" @change="bottomPos(bottom)" :disabled="!legend.show">
                <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
              </el-radio-group>
            </div>
            <div class="flex-1" v-if="choose.bottom">
              <el-slider v-model="num.bottom" v-if="bottom === 'percent'" @change="bottomSlider(bottom, num.bottom)"></el-slider>
              <el-slider v-model="num.bottom" v-if="bottom === 'num'" @change="bottomSlider(bottom, num.bottom)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
    </el-form>
    <el-popover ref="colorsPicker" placement="bottom" width="220" trigger="hover" v-model="colorsPickerShow">
      <div style="text-align: center; margin: 0px 0px 10px 0px">
        <el-radio-group type="primary" v-model="colorModel" size="mini">
          <el-radio-button label="HEX"></el-radio-button>
          <el-radio-button label="RGBA"></el-radio-button>
        </el-radio-group>
      </div>
      <sketch-picker v-model="pickerColors"></sketch-picker>
      <div style="text-align: center; margin: 10px 0px 0px 0px">
        <el-button type="warning" size="mini" @click="colorCancel">取消</el-button>
        <el-button type="success" size="mini" @click="colorNext">连续</el-button>
        <el-button type="danger" size="mini" @click="colorOK">确定</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script>
import chartColors from 'constants/chartColors'
import { Sketch } from 'vue-color'
export default {
  name: 'Legend',
  props: {},
  components: { 'sketch-picker': Sketch },
  data() {
    return {
      legend: {
        show: true,
        type: 'plain',
        orient: 'horizontal',
        left: 'auto',
        right: 'auto',
        top: 'auto',
        bottom: 'auto',
        textColor: chartColors.legendLabelColor
      },
      booleanList: [
        {label: '显示图例', value: true},
        {label: '隐藏图例', value: false}
      ],
      typeList: [
        {label: '普通图例', value: 'plain'},
        {label: '可滚动翻页图例', value: 'scroll'}
      ],
      orientList: [
        {label: '横向图例', value: 'horizontal'},
        {label: '竖向图例', value: 'vertical'}
      ],
      positionList: [
        {label: '居左', value: 'left'},
        {label: '居中', value: 'center'},
        {label: '居右', value: 'right'},
        {label: '百分比', value: 'percent'},
        {label: '数值', value: 'num'}
      ],
      choose: {
        left: false,
        right: false,
        top: false,
        bottom: false
      },
      left: '',
      right: '',
      top: '',
      bottom: '',
      num: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      colorsPickerShow: false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    changeShow(show) {
      this.$emit('showLegend', show)
    },
    changeType(type) {
      this.$emit('typeLegend', type)
    },
    changeOrient(orient) {
      this.$emit('orientLegend', orient)
    },
    leftPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.left = type
        this.choose.left = false
        this.$emit('leftLegend', this.legend.left)
      }
      this.choose.left = true
    },
    leftSlider(type, value) {
      type === 'percent' ? this.legend.left = value.toString() + '%' : this.legend.left = value
      this.$emit('leftLegend', this.legend.left)
    },
    rightPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.right = type
        this.choose.right = false
        this.$emit('rightLegend', this.legend.right)
      }
      this.choose.right = true
    },
    rightSlider(type, value) {
      type === 'percent' ? this.legend.right = value.toString() + '%' : this.legend.right = value
      this.$emit('rightLegend', this.legend.right)
    },
    topPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.top = type
        this.choose.top = false
        this.$emit('topLegend', this.legend.top)
      }
      this.choose.top = true
    },
    topSlider(type, value) {
      type === 'percent' ? this.legend.top = value.toString() + '%' : this.legend.top = value
      this.$emit('topLegend', this.legend.top)
    },
    bottomPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.bottom = type
        this.choose.bottom = false
        this.$emit('bottomLegend', this.legend.bottom)
      }
      this.choose.bottom = true
    },
    bottomSlider(type, value) {
      type === 'percent' ? this.legend.bottom = value.toString() + '%' : this.legend.bottom = value
      this.$emit('bottomLegend', this.legend.bottom)
    },
    colorCancel() {
      this.colorsPickerShow = false
    },
    colorNext() {
      if (this.colorModel === 'HEX') {
        this.sColors ? this.sColors = `${this.sColors},${this.pickerColors.hex}` : this.sColors = `${this.pickerColors.hex}`
      } else if (this.colorModel === 'RGBA') {
        this.sColors ? this.sColors = `${this.sColors},${this.pickerColors.hex}` : this.sColors = `${this.pickerColors.rgba}`
      }
    },
    colorOK() {
      if (this.colorModel === 'HEX') {
        this.sColors ? this.sColors = `${this.sColors},${this.pickerColors.hex}` : this.sColors = `${this.pickerColors.hex}`
      } else if (this.colorModel === 'RGBA') {
        this.sColors ? this.sColors = `${this.sColors},${this.pickerColors.hex}` : this.sColors = `${this.pickerColors.rgba}`
      }
      this.colorsPickerShow = false
    }
  }
}
</script>
<style lang='less'>
.color-btn{
  .el-input-group__append, .el-input-group__prepend{
    padding: 0px 10px;
  }
}
</style>
<style lang='less' scoped>
.input-box,
.radio-box{
  display: inline-block;
  vertical-align: top;
}
.input-color{
  width: 200px;
  display: inline-block;
}
.input-box{
  width: 100px;
  margin-right: 15px;
}
.radio-box{
  width: 400px;
  margin-right: 15px;
}

</style>