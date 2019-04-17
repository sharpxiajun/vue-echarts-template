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
        default: '400px'
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
            let json = that.currJsonEditor.get()
            that.jsonData = json
            console.log(`当前json数据:`, json)
            that.$emit('jsonChange', json)
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
