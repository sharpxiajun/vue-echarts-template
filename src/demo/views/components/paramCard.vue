<template>
  <el-card class="mb-10">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  name: 'ParamCard',
  props: {
    title: {
      type: String,
      default: '参数分类'
    }
  },
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
</style>