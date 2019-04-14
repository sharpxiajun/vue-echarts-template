import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      '_theme': 'theme'
    })
  },
  // keep-alive组件激活时调用
  activated() {
    this.$forceUpdate()
  },
  // keep-alive组件停用时调用
  deactivated() {}
}
