<template>
  <div class="sample">
    <el-row :gutter="15">
      <el-col :span="4">
        <div class="leftNav mt-10">
          <el-tree
            :data="treeData"
            node-key="code"
            :default-expand-all="true"
            @node-click="navNodeClick">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="rightBox mt-10">
          <keep-alive>
            <component v-bind:is="currChart"></component>
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as api from 'api/demo/sample'
  import basicLineChart from 'views/charts/lines/basicLineChart'

  export default {
    name: 'sample',
    data() {
      return {
        treeData: [],
        currChart: null,
        currChartName: '图表实例说明'
      }
    },
    created() {
      this.treeData = api.sampleTree()
      this.currChart = basicLineChart
    },
    mounted() {
    },
    watch: {

    },
    methods: {
      navNodeClick(data) {
        console.log('navNodeClick', data, arguments)
        this.currChartName = data.label
        if (data.component) {
          this.currChart = data.component
          console.log('curr chart', data.component)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .sample {
    .leftNav {
      height: 100%;
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border: 1px solid #EBEEF5;
      border-radius: 4px;
    }
    .rightBox {
      height: 100%;
      background-color: transparent;
    }
  }
</style>
