<template>
  <div class="sample">
    <el-row :gutter="15">
      <el-col :span="4">
        <div class="left-nav mt-10">
          <el-tree
            :data="treeData"
            node-key="code"
            :default-expand-all="true"
            @node-click="navNodeClick">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="right-box mt-10">
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
  // import basicLineChart from 'views/charts/lines/basicLineChart'
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
<style lang="less">
.left-nav{
  .el-tree{
    >.el-tree-node {
      &.is-current{
        .el-tree-node__content{
          background: #09a2b0;
          border-radius: 4px;
          color:#fff;
        }
        >.el-tree-node__children{
          .el-tree-node__content{
            background: #fff;
            color: #606266;
          }
        }
      }
      >.el-tree-node__children{
        .el-tree-node{
          &.is-current{
            .el-tree-node__content{
              background: #09a2b0;
              border-radius: 4px;
              color:#fff;
            }
          }
        }
        .el-tree-node__content{
          background: #fff;
          color: #606266;
          &:hover{
            background: #09a2b0;
            border-radius: 4px;
            color:#fff;
          }
        }
      }
    }
  }
}
</style>
<style scoped lang="less">
  .sample {
    .left-nav {
      height: 100%;
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border: 1px solid #EBEEF5;
      border-radius: 4px;
      padding: 10px 20px;
      background: #fff;
    }
    .right-box {
      height: 100%;
      background-color: transparent;
    }
  }
</style>
