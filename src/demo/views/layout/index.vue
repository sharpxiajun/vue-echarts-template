<template>
  <el-container direction="vertical" id="layout">
    <Header ref="header" />
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
  import Header from './header'
  import { mapGetters } from 'vuex'

  export default {
    name: 'layout',
    components: { Header },
    data() {
      return {
      }
    },
    created() {
      console.log(this, this._theme)
      this.setSkin(this._theme)
    },
    mounted() {
    },
    beforeDestroy() {
    },
    computed: {
      ...mapGetters(['menus'])
    },
    watch: {
    },
    methods: {
      setSkin(val) {
        this.$root.$el.parentNode.className = val
      }
    }
  }
</script>

<style scoped>

</style>
