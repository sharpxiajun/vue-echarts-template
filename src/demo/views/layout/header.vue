<template>
  <el-header :height="height">
    <div class="brand left" ref="brandLeft">
      <a href="javascript:;">
        <i class="icon iconfont iconanquan-"></i>
        {{title}}
      </a>
    </div>
    <div class="nav-left" ref="menusBox">
      <ul class="menu" ref="menus">
        <li v-for="menu in sysMenus" :key="menu.path" v-if="!menu.hidden && menu.children" @click="dropMenu(menu)" class="menu-item">
          <a href="javascript:;" v-if="menu.childrenVisible === false" :to="menu.path" class="menu-title" v-touch-ripple :class="{active: $route.path.search(menu.path) !== -1}">
            <i class="icon iconfont" :class="menu.icon"></i>
            {{menu.meta && menu.meta.title}}
          </a>
          <div v-else>
            <el-popover placement="bottom" width="180" trigger="hover" popper-class="popover todo-popover">
              <a href="javascript:;" slot="reference" class="menu-title" :class="{active: $route.path.search(menu.path) !== -1}">
                <i class="icon iconfont" :class="menu.icon"></i>
                {{menu.meta.title}}
              </a>
              <ul class="popover-list">
                <a href="javascript:;" v-for="submenu in menu.children" @click="changeMenu(submenu.path)" tag="li" :key="submenu.path" v-if="!submenu.hidden" class="popover-list-item">
                  <a href="javascript:;" v-touch-ripple>
                    <i class="icon iconfont" :class="submenu.icon" v-if="submenu.icon"></i>
                    {{ submenu.meta.title }}
                  </a>
                </a>
              </ul>
            </el-popover>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll-left" ref="scrollLeft" v-if="showMenuMore" @click="menuScrollLeft">
      <i class="icon iconfont iconhoutui"></i>
    </div>
    <div class="scroll-right" v-if="showMenuMore" @click="menuScrollRight">
      <i class="icon iconfont icongengduo"></i>
    </div>
    <div class="nav-right" ref="navRight"></div>
  </el-header>
</template>

<script>
import { on, off } from 'utils/dom'
import { _headerHeight } from 'constants/style'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      height: _headerHeight,
      isLoading: false,
      sysMenus: [],
      navMenuWidth: 0,
      showMenuMore: false
    }
  },
  computed: {
    ...mapGetters(['activeMenu', 'menus', 'title'])
  },
  watch: {
    $route: {
      handler(value) {},
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.initMenus()
    this.$nextTick(() => {
      this.setMenuWidth()
    })
    on(window, 'resize', this.setMenuWidth)
  },
  beforeDestroy() {
    off(window, 'resize', this.setMenuWidth)
  },
  activated() {},
  methods: {
    ...mapMutations({
      setTheme: 'SET_THEME'
    }),
    initMenus() {
      console.log('this.menus', this.menus)
      this.menus.forEach(menu => {
        if (menu.path !== '/locking') {
          this.sysMenus.push(menu)
        }
      })
    },
    setMenuWidth() {
      const brandLeft = this.$refs.brandLeft.clientWidth
      const menusWidth = this.$refs.menus.clientWidth
      const navRight = this.$refs.navRight.clientWidth
      const w = window.innerWidth - brandLeft - navRight
      this.navMenuWidth = menusWidth < w ? menusWidth + 1 : w - 101
      this.$refs.menusBox.style.width = `${this.navMenuWidth}px`
      this.$refs.menus.style.width = `${menusWidth + 1}px`
      if (this.navMenuWidth < menusWidth) {
        this.showMenuMore = true
        this.$refs.menusBox.style.marginLeft = 40 + 'px'
        setTimeout(() => {
          this.$refs.scrollLeft.style.left = brandLeft + 'px'
        }, 20)
      } else {
        this.showMenuMore = false
        this.$refs.menusBox.style.marginLeft = 0 + 'px'
      }
    },
    menuScrollLeft() {
      const scrollLeft = this.$refs.menusBox.scrollLeft
      if (scrollLeft > 0) {
        this.$refs.menusBox.scrollLeft -= 100
      }
    },
    menuScrollRight() {
      const scrollLeft = this.$refs.menusBox.scrollLeft
      if (scrollLeft + this.navMenuWidth < this.$refs.menus.clientWidth) {
        this.$refs.menusBox.scrollLeft += 100
      }
    },
    dropMenu(menu) {
      console.log(menu.childrenVisible, '===menu.childrenVisible')
      if (menu.childrenVisible) {
        this.$router.push(menu.children[0].path)
      } else {
        this.$router.push(menu.path)
      }
    },
    changeMenu(path) {
      this.$router.push(path)
    }
  }
}
</script>
