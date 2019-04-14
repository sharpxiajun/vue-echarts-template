<template>
  <el-container direction="vertical">
    <div class="container" ref="mainContainer">
      <div class="main layout-wrapper">
        <transition name="el-zoom-in-center">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'layout',
    components: {},
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {}
  }
</script>

<style scoped>

</style>
