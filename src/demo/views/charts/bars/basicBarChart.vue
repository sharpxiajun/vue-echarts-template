<template>
  <div class="chart-demo">
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>Mock数据</span>
      </div>
      <div class="paramBox">
        <vue-json-editor v-model="json" :show-btns="true" mode="text" :modes="['tree', 'code', 'form', 'text', 'view']" :lang="'zh'" @json-change="onJsonChange" @json-save="onJsonSave" @has-error="onError"></vue-json-editor>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>独立参数</span>
      </div>
      <div class="paramBox">
        <el-form :inline="true" label-position="labelPosition">
          <el-form-item label="rotate" prop="rotate">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-select v-model="rotate" size="mini" placeholder="旋转坐标轴文字角度">
                <el-option v-for="(item, ind) in rotateList" :key="ind" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="xAxisValue" prop="xAxisValue">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-select v-model="xAxisValue" size="mini" placeholder="横纵坐标互换">
                <el-option v-for="(item, ind) in booleanList" :key="ind" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="barStack" prop="barStack">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-select v-model="barStack" size="mini" placeholder="横纵坐标互换">
                <el-option v-for="(item, ind) in booleanList" :key="ind" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>颜色选择</span>
      </div>
      <div class="paramBox">
        <el-form label-position="labelPosition" label-width="160px">
          <el-form-item label="sColors" prop="sColors">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-input placeholder="请点击选择获取一组颜色" v-model="sColors" :readonly="true">
                <el-button slot="prepend" size="mini" icon="el-icon-delete" @click="colorsReset"></el-button>
                <el-button slot="append" icon="el-icon-search" v-popover:colorsPicker></el-button>
              </el-input>
            </el-tooltip>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>关联参数:Legend</span>
      </div>
      <div class="paramBox">
        <el-form :inline="true" label-position="labelPosition">
          <el-form-item label="legendShow" prop="legendShow">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-select v-model="legendShow" size="mini" placeholder="图示显示">
                <el-option v-for="(item, ind) in booleanList" :key="ind" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="legendOrient" prop="legendOrient">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-select v-model="legendOrient" size="mini" :disabled="!legendShow" placeholder="图示方向">
                <el-option v-for="(item, ind) in orientList" :key="ind" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="legendLeft" prop="legendLeft">
            <el-tooltip placement="top">
              <div slot="content">
                <span style="font-weight: bold">XXXX说明:</span><br/>
                <p style="text-indent: 3em">该参数用途旋转坐标轴文字角度横纵坐标互换</p>
              </div>
              <el-input placeholder="请选择相关的数据" :disabled="!legendShow" :readonly="true" v-model="legendLeft">
                <el-button slot="prepend" size="mini" icon="el-icon-delete" @click="legendLeftReset"></el-button>
                <el-button slot="append" size="mini" icon="el-icon-search" v-popover:legendLeftPicker></el-button>
              </el-input>
            </el-tooltip>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="mb-10">
      <div slot="header" class="clearfix">
        <span>基础柱状图</span>
      </div>
      <div class="chartBox" ref="myChartDemo">
        <BarChart></BarChart>
      </div>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div class="contentBox"></div>
    </el-card>
    <el-popover
      ref="colorsPicker"
      placement="bottom"
      width="220"
      v-model="colorsPickerShow">
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
    <el-popover
      ref="legendLeftPicker"
      placement="top"
      width="360"
      v-model="legendLeftPickerShow">
      <el-form ref="form" label-width="0px">
        <el-form-item label="">
          <el-radio-group v-model="legendLeftPicker">
            <el-radio v-for="(item, ind) in positionList" :key="ind" :label="item.value">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="">
          <el-slider v-model="legendLeftNum" :min="0" :max="maxWidth" :disabled="legendLeftDisabled"></el-slider>
        </el-form-item>
      </el-form>
    </el-popover>
  </div>
</template>

<script>
  import BarChart from '@/bar/barChart'
  import vueJsonEditor from 'vue-json-editor'
  import { Sketch } from 'vue-color'

  export default {
    name: 'basicBarChart',
    components: { BarChart, 'sketch-picker': Sketch, vueJsonEditor },
    data() {
      return {
        rotate: 30,
        legendShow: true,
        xAxisValue: false,
        labelPosition: 'right',
        legendOrient: 'horizontal',
        sColors: '',
        barStack: false,
        colorModel: 'HEX', // HEX RGBA
        pickerColors: {
          hex: '#ff3d11',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 0.9
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 0.9
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 0.9
          },
          a: 1
        },
        json: {
          legendData: ['某某接入分类'],
          seriesData: [[16672, 14345, 19876, 22098]],
          categoryData: ['IDC', 'IRCS', 'CDN', 'DNS']
        },
        colorsPickerShow: false,
        rotateList: [
          {label: '0度', value: 0},
          {label: '30度', value: 30},
          {label: '45度', value: 45},
          {label: '60度', value: 60},
          {label: '90度', value: 90},
          {label: '120度', value: 120}
        ],
        booleanList: [
          {label: 'TRUE', value: true},
          {label: 'FALSE', value: false}
        ],
        orientList: [
          {label: 'horizontal', value: 'horizontal'},
          {label: 'vertical', value: 'vertical'}
        ],
        legendLeftPickerShow: false,
        legendLeftPicker: 'left',
        legendLeftNum: 0,
        maxWidth: 300,
        positionList: [
          {label: 'left', value: 'left'},
          {label: 'center', value: 'center'},
          {label: 'right', value: 'right'},
          {label: '数值', value: 'num'}
        ]
      }
    },
    computed: {
      colors() {
        return this.sColors.split(',')
      },
      barData() {
        return this.json
      },
      legendLeft() {
        if (this.legendLeftPicker === 'num') {
          return this.legendLeftNum
        } else {
          return this.legendLeftPicker
        }
      },
      legendLeftDisabled() {
        if (this.legendLeftPicker === 'num') {
          return false
        } else {
          return true
        }
      }
    },
    created() {

    },
    mounted() {
      this.maxWidth = this.$refs.myChartDemo.clientWidth - 100
    },
    watch: {
      pickerColors(newVal, oldVal) {
        console.log('pickerColors', newVal, oldVal, arguments)
      }
    },
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
      },
      onJsonChange (value) {
        console.log('onJsonChange value:', value)
      },

      onJsonSave (value) {
        console.log('onJsonSave value:', value)
      },

      onError (value) {
        console.log('onError value:', value)
      },
      legendLeftCancel() {
        console.log('legendLeftCancel')
      },
      legendLeftOK() {
        console.log('legendLeftOK')
      },
      legendLeftReset() {
        this.legendLeftPicker = 'left'
      },
      colorsReset() {
        this.sColors = ''
      }
    }
  }
</script>

<style scoped lang="less"></style>
