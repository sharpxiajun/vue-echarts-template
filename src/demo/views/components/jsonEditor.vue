<template>
  <div class="jsonEditor full-block">
    <div class="currJsonEditor" ref="currJsonEditor" :style="style"></div>
  </div>
</template>

<script>
  // import 'jsoneditor/dist/jsoneditor.min.css'
  import 'jsoneditor/dist/jsoneditor.css'
  import 'assets/css/jsonEditortheme.css'
  import JsonEditor from 'jsoneditor'

  export default {
    name: 'jsonEditor',
    props: {
      defaultMode: {
        type: String,
        default: 'tree'
      },
      modes: {
        type: Array,
        default: () => ['tree', 'code', 'form', 'text', 'view']
      },
      json: {
        type: Object,
        default: () => {}
      },
      lang: {
        type: String,
        default: 'zh'
      },
      height: {
        type: String,
        default: '500px'
      }
    },
    data() {
      return {
        currJsonEditor: null,
        jsonData: null,
        style: {
          height: this.height
        }
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        let that = this
        let opts = {
          mode: this.defaultMode,
          modes: this.modes,
          onChange() {
            console.log('jsonEditor', arguments, this)

            let flag = true
            try {
              console.log('JsonEditor onChange事件 内容正在变化...')
            } catch (err) {
              flag = false
              console.error('JsonEditor onChange事件 报错，报错信息：', err)
            } finally {
              if (flag) {
                let json = that.currJsonEditor.get()
                that.jsonData = json
                console.log(`JsonEditor onChange事件 当前json数据:`, json)
                that.$emit('jsonChange', json)
              }
              flag = true
            }
          }
        }
        this.currJsonEditor = new JsonEditor(this.$refs.currJsonEditor, opts, this.json)
        console.log('this.currJsonEditor', this.currJsonEditor)
      }
    }
  }
</script>

<style lang="less">
</style>
