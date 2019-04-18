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
      <el-button type="success" size="mini" @click="colorNext">连续</el-button>
      <el-button type="danger" size="mini" @click="colorOK">确定</el-button>
    </div>
  </div>
</template>

<script>
import { Sketch } from 'vue-color'
export default {
  name: 'colorsPicker',
  props: {},
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
    }
  },
  computed: {},
  mounted() {},
  methods: {
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
<style lang='less' scoped>
</style>