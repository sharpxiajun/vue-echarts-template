<template>
  <div class="sample">
    <el-row :gutter="15">
      <el-col :span="6">
        <div class="leftNav mt-10">
          <el-tree
            :data="treeData"
            node-key="code"
            :default-expand-all="true"
            @node-click="navNodeClick">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="18">
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
  import basicBarChart from 'views/charts/bars/basicBarChart'

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
      this.currChart = basicBarChart
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
      min-height: 700px;
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border: 1px solid #EBEEF5;
      border-radius: 4px;
    }
    .rightBox {
      height: 100%;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border: 1px solid #EBEEF5;
      border-radius: 4px;
      padding: 6px;
      background-color: #fff;
    }
  }
</style>
