<template>
  <div class='colorsPicker'>
    <div style="text-align: center; margin: 0px 0px 10px 0px">
      <el-radio-group type="primary" v-model="colorModel" size="mini">
        <el-radio-button label="HEX"></el-radio-button>
        <el-radio-button label="RGBA"></el-radio-button>
      </el-radio-group>
    </div>
    <sketch-picker v-model="pickerColors"></sketch-picker>
    <div style="text-align: center; margin: 10px 0px 0px 0px">
      <el-button type="warning" size="mini" @click="colorCancel">取消</el-button>
      <el-button type="success" size="mini" v-if="isArray" @click="colorNext">连续</el-button>
      <el-button type="danger" size="mini" @click="colorOK">确定</el-button>
    </div>
  </div>
</template>

<script>
import { Sketch } from 'vue-color'
export default {
  name: 'colorsPicker',
  props: {
    isArray: {
      type: Boolean,
      default: false
    }
  },
  components: { 'sketch-picker': Sketch },
  data() {
    return {
      colorModel: 'HEX', // HEX RGBA
      pickerColors: {
        hex: '#ff3d11',
        hsl: { h: 150, s: 0.5, l: 0.2, a: 0.9 },
        hsv: { h: 150, s: 0.66, v: 0.30, a: 0.9 },
        rgba: { r: 25, g: 77, b: 51, a: 0.9 },
        a: 1
      },
      colors: ''
    }
  },
  computed: {},
  mounted() {},
  methods: {
    colorCancel() {
      this.$emit('colorCancel', false)
    },
    colorNext() {
      if (this.colorModel === 'HEX') {
        this.colors ? this.colors = `${this.colors},${this.pickerColors.hex}` : this.colors = `${this.pickerColors.hex}`
      } else if (this.colorModel === 'RGBA') {
        var colors = this.getColors(this.pickerColors.rgba)
        this.isArray ? this.colors ? this.colors = `${this.colors},${colors}` : this.colors = `${colors}` : this.colors = `${colors}`
      }
      this.$emit('colorNext', this.colors)
    },
    colorOK() {
      if (this.colorModel === 'HEX') {
        this.colors ? this.colors = `${this.colors},${this.pickerColors.hex}` : this.colors = `${this.pickerColors.hex}`
      } else if (this.colorModel === 'RGBA') {
        var colors = this.getColors(this.pickerColors.rgba)
        this.isArray ? this.colors ? this.colors = `${this.colors},${colors}` : this.colors = `${colors}` : this.colors = `${colors}`
      }
      this.$emit('colorOK', this.colors)
    },
    getColors(colors) {
      var str = 'rgba('
      for (var key in colors) {
        str += colors[key] + ','
      }
      str = colors.substring(0, str.lastIndexOf(','))
      str += ')'
      return str
    }
  }
}
</script>
<style lang='less' scoped>
</style>