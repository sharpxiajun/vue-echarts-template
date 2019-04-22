<template>
  <div class='grid'>
    <el-form :model="grid" label-suffix="：" label-width="100">
      <el-row>
        <el-col :span="12">
          <el-form-item label="gridLeft">
            <div class="flex-layout num-str">
              <div class="input-box">
                <el-input v-model="grid.left" readonly></el-input>
              </div>
              <div class="radio-box radio-box2">
                <el-radio-group v-model="left" size="mini">
                  <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
                </el-radio-group>
              </div>
              <div class="flex-1">
                <el-slider v-model="num.left" @change="leftSlider(left, num.left)"></el-slider>
              </div>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="gridRight">
            <div class="flex-layout num-str">
              <div class="input-box">
                <el-input v-model="grid.right" readonly></el-input>
              </div>
              <div class="radio-box radio-box2">
                <el-radio-group v-model="right" size="mini">
                  <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
                </el-radio-group>
              </div>
              <div class="flex-1">
                <el-slider v-model="num.right" @change="rightSlider(right, num.right)"></el-slider>
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="gridTop">
            <div class="flex-layout num-str">
              <div class="input-box">
                <el-input v-model="grid.top" readonly></el-input>
              </div>
              <div class="radio-box radio-box2">
                <el-radio-group v-model="top" size="mini">
                  <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
                </el-radio-group>
              </div>
              <div class="flex-1">
                <el-slider v-model="num.top" @change="topSlider(top, num.top)"></el-slider>
              </div>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="gridBottom">
            <div class="flex-layout num-str">
              <div class="input-box">
                <el-input v-model="grid.bottom" readonly></el-input>
              </div>
              <div class="radio-box radio-box2">
                <el-radio-group v-model="bottom" size="mini">
                  <el-radio :label="item.value" v-for="item in positionList" :key="item.value">{{item.label}}</el-radio>
                </el-radio-group>
              </div>
              <div class="flex-1">
                <el-slider v-model="num.bottom" @change="bottomSlider(bottom, num.bottom)"></el-slider>
              </div>
            </div> 
          </el-form-item>
        </el-col>
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
  watch: {
    grid: {
      deep: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, 'newVal=========')
        this.$emit('gridData', newVal)
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    leftSlider(type, value) {
      type === 'percent' ? this.grid.left = value.toString() + '%' : this.grid.left = value
    },
    rightSlider(type, value) {
      type === 'percent' ? this.grid.right = value.toString() + '%' : this.grid.right = value
    },
    topSlider(type, value) {
      type === 'percent' ? this.grid.top = value.toString() + '%' : this.grid.top = value
    },
    bottomSlider(type, value) {
      type === 'percent' ? this.grid.bottom = value.toString() + '%' : this.grid.bottom = value
    }
  }
}
</script>
<style lang='less' scoped>
</style>