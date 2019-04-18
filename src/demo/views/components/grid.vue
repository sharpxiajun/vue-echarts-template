<template>
  <div class='grid'>
    <el-form :model="grid" label-suffix="：" label-width="100">
      <el-row>
        <el-form-item label="gridLeft">
          <div class="input-box">
            <el-input v-model="grid.left" readonly>
              <i class="el-icon-edit el-input__icon" slot="suffix" @click="leftIconClick"></i>
            </el-input>
          </div>
          <div class="radio-box" v-if="choose.left">
            <el-radio-group v-model="left" @change="leftPos(left)">
              <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </div>
          <div class="slider-box" v-if="choose.left">
            <el-slider v-model="num.left" v-if="left === 'percent'" @change="leftSlider(left, num.left)"></el-slider>
            <el-slider v-model="num.left" v-if="left === 'num'" @change="leftSlider(left, num.left)"></el-slider>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="gridRight">
          <div class="input-box">
            <el-input v-model="grid.right" readonly>
              <i class="el-icon-edit el-input__icon" slot="suffix" @click="rightIconClick"></i>
            </el-input>
          </div>
          <div class="radio-box" v-if="choose.right">
            <el-radio-group v-model="right" @change="rightPos(right)">
              <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </div>
          <div class="slider-box" v-if="choose.right">
            <el-slider v-model="num.right" v-if="right === 'percent'" @change="rightSlider(right, num.right)"></el-slider>
            <el-slider v-model="num.right" v-if="right === 'num'" @change="rightSlider(right, num.right)"></el-slider>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="gridTop">
          <div class="input-box">
            <el-input v-model="grid.top" readonly>
              <i class="el-icon-edit el-input__icon" slot="suffix" @click="topIconClick"></i>
            </el-input>
          </div>
          <div class="radio-box" v-if="choose.top">
            <el-radio-group v-model="top" @change="topPos(top)">
              <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </div>
          <div class="slider-box" v-if="choose.top">
            <el-slider v-model="num.top" v-if="top === 'percent'" @change="topSlider(top, num.top)"></el-slider>
            <el-slider v-model="num.top" v-if="top === 'num'" @change="topSlider(top, num.top)"></el-slider>
          </div>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="gridBottom">
          <div class="input-box">
            <el-input v-model="grid.bottom" readonly>
              <i class="el-icon-edit el-input__icon" slot="suffix" @click="bottomIconClick"></i>
            </el-input>
          </div>
          <div class="radio-box" v-if="choose.bottom">
            <el-radio-group v-model="bottom" @change="bottomPos(bottom)">
              <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
            </el-radio-group>
          </div>
          <div class="slider-box" v-if="choose.bottom">
            <el-slider v-model="num.bottom" v-if="bottom === 'percent'" @change="bottomSlider(bottom, num.bottom)"></el-slider>
            <el-slider v-model="num.bottom" v-if="bottom === 'num'" @change="bottomSlider(bottom, num.bottom)"></el-slider>
          </div>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {},
  components: {},
  data() {
    return {
      grid: {
        left: 'auto',
        right: 'auto',
        top: 'auto',
        bottom: 'auto'
      },
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
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    leftIconClick() {
      this.choose.left = !this.choose.left
    },
    leftPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.grid.left = type
        this.$emit('leftGrid', this.grid.left)
      }
    },
    leftSlider(type, value) {
      type === 'percent' ? this.grid.left = value.toString() + '%' : this.grid.left = value
      this.$emit('leftGrid', this.grid.left)
    },
    rightIconClick() {
      this.choose.right = !this.choose.right
    },
    rightPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.grid.right = type
        this.$emit('rightGrid', this.grid.right)
      }
    },
    rightSlider(type, value) {
      type === 'percent' ? this.grid.right = value.toString() + '%' : this.grid.right = value
      this.$emit('rightGrid', this.grid.right)
    },
    topIconClick() {
      this.choose.top = !this.choose.top
    },
    topPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.grid.top = type
        this.$emit('topGrid', this.grid.top)
      }
    },
    topSlider(type, value) {
      type === 'percent' ? this.grid.top = value.toString() + '%' : this.grid.top = value
      this.$emit('topGrid', this.grid.top)
    },
    bottomIconClick() {
      this.choose.bottom = !this.choose.bottom
    },
    bottomPos(type) {
      if (type !== 'percent' && type !== 'num') {
        this.grid.bottom = type
        this.$emit('bottomGrid', this.grid.bottom)
      }
    },
    bottomSlider(type, value) {
      type === 'percent' ? this.grid.bottom = value.toString() + '%' : this.grid.bottom = value
      this.$emit('bottomGrid', this.grid.bottom)
    }
  }
}
</script>
<style lang='less' scoped>
</style>