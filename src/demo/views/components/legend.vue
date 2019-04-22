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
                <el-button slot="prepend" class="el-icon-delete" @click="resetColors"></el-button>
                <el-button slot="append" class="icon iconfont iconyanse" v-popover:colorsPicker></el-button>
              </el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="legendLeft">
          <div class="flex-layout num-str">
            <div class="input-box">
              <el-input v-model="legend.left" readonly :disabled="!legend.show"></el-input>
            </div>
            <div class="radio-box">
              <el-radio-group v-model="left" @change="leftPos(left)" :disabled="!legend.show">
                <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
              </el-radio-group>
            </div>
            <div class="flex-1" v-if="choose.left">
              <el-slider v-model="num.left" @change="leftSlider(left, num.left)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="legendRight">
            <div class="flex-layout num-str">
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
                <el-slider v-model="num.right" @change="rightSlider(right, num.right)"></el-slider>
              </div>
            </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="legendTop">
          <div class="flex-layout num-str">
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
             <el-slider v-model="num.top" @change="topSlider(top, num.top)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="legendBottom">
          <div class="flex-layout num-str">
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
              <el-slider v-model="num.bottom" @change="bottomSlider(bottom, num.bottom)"></el-slider>
            </div>
          </div>
        </el-form-item>
      </el-row>
    </el-form>
    <el-popover ref="colorsPicker" placement="bottom" width="220" trigger="hover" v-model="colorsPickerShow" :disabled="!legend.show">
      <ColorsPicker @colorCancel="colorCancel" @colorOK="colorOK"></ColorsPicker>
    </el-popover>
  </div>
</template>

<script>
import chartColors from 'constants/chartColors'
import ColorsPicker from 'components/colorsPicker'
export default {
  name: 'Legend',
  props: {},
  components: { ColorsPicker },
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
  watch: {
    legend: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.$emit('legendData', newVal)
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    leftPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.left = type
        this.choose.left = false
      }
      this.choose.left = true
    },
    leftSlider(type, value) {
      type === 'percent' ? this.legend.left = value.toString() + '%' : this.legend.left = value
    },
    rightPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.right = type
        this.choose.right = false
      }
      this.choose.right = true
    },
    rightSlider(type, value) {
      type === 'percent' ? this.legend.right = value.toString() + '%' : this.legend.right = value
    },
    topPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.top = type
        this.choose.top = false
      }
      this.choose.top = true
    },
    topSlider(type, value) {
      type === 'percent' ? this.legend.top = value.toString() + '%' : this.legend.top = value
    },
    bottomPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.legend.bottom = type
        this.choose.bottom = false
      }
      this.choose.bottom = true
    },
    bottomSlider(type, value) {
      type === 'percent' ? this.legend.bottom = value.toString() + '%' : this.legend.bottom = value
    },
    colorCancel(boolean) {
      this.colorsPickerShow = boolean
    },
    colorOK(colors) {
      this.legend.textColor = colors
      this.colorsPickerShow = false
    },
    resetColors() {
      this.legend.textColor = ''
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