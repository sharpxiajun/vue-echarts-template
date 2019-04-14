import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from 'store'
import axios from 'axios'
import ElementUI from 'element-ui'
import * as m from 'utils/main'
import 'element-ui/lib/theme-chalk/index.css'
import globalMixin from 'mixins/globalMixin'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Router)
Vue.mixin(globalMixin)

export const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active'
})

Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {},
  created() {
    this.initPro()
  },
  methods: {
    initPro() {
      const originMenus = this.$store.state.originMenus
      if (originMenus.length && originMenus instanceof Array) {
        this.setRoutes(originMenus)
        return
      }
      const fun = require(`api/${process.env.PROJECT}/menus`)
      const res = fun.menus()
      if (res) {
        const routes = this.setRoutes(res)
        const index = routes.findIndex(item => item.path === '/')

        this.$store.commit('SET_ORIGIN_MENUS', res)
        this.$store.commit('SET_MENUS', routes[index].children)
      } else {
        // errCb(res.data)
        alert('菜单初始化错误！！！！')
      }
    },
    setRoutes(menus) {
      let routes = []
      const _router = require(`./router/${process.env.PROJECT}.js`)
      routes = m.mutipleMenusHandle(menus, _router['default'])
      router.options.routes = routes
      router.addRoutes(routes, {
        override: true
      })
      return routes
    }
  }
})
