import storage from 'utils/storage'

export default {
  title: storage.get('title') || 'VUE Echarts模板',
  menus: storage.get('menus') || [], // 所有导航
  originMenus: storage.get('originMenus') || [], // 原始从后台请求的菜单
  activeMenu: storage.get('activeMenu') || [], // 二级导航
  theme: storage.get('theme') || 'skin-white'
}
