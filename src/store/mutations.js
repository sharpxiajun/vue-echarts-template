import types from './mutation_types.js'
import storage from 'utils/storage'

export default {
  [types.SET_TITLE](state, title) {
    state.title = title
    storage.set('title', title)
  },
  [types.SET_MENUS](state, menus) {
    state.menus = menus
    state.activeMenu = menus[1]
    storage.set('menus', menus)
    storage.set('activeMenu', menus[1])
  },
  [types.SET_ORIGIN_MENUS](state, menus) {
    state.originMenus = menus
    storage.set('originMenus', menus)
  },
  [types.SET_ACTIVE_MENU](state, activeMenu) {
    state.activeMenu = activeMenu
    storage.set('activeMenu', activeMenu)
  },
  [types.SET_THEME](state, theme) {
    state.theme = theme
    storage.set('theme', theme)
  }
}
