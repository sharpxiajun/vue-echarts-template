import storage from './storage'

function setLastRoute(menu, lastRoutes) {
  if (!menu.children) return
  menu.children.forEach(subMenu => {
    // if (subMenu.lastRoute) {
    if (subMenu.detailPage) {
      !lastRoutes.includes(subMenu.path) && lastRoutes.push(subMenu.path)
    }
    setLastRoute(subMenu, lastRoutes)
  })
}

export const genLastRoutes = menus => {
  // 最后一及路由，用于存储返回上一级路由的标记
  const lastRoutes = storage.get('lastRoutes') || []

  menus.forEach(menu => {
    if (!menu.hidden) {
      setLastRoute(menu, lastRoutes)
    }
  })
  storage.set('lastRoutes', lastRoutes)
}

export const menuToRoute = (menu, component) => {
  let childrenVisible = false
  if (menu.children && menu.children.length !== 0) {
    childrenVisible = true
  } else {
    childrenVisible = false
  }
  return {
    path: menu.menuPath,
    name: menu.menuCode,
    icon: menu.menuIcon,
    redirect: menu.redirect,
    detailPage: menu.detailPage,
    meta: {
      title: menu.menuName,
      describe: menu.remark
    },
    hidden: !menu.isVisible,
    isNewWindow: menu.isNewWindow,
    childrenVisible: childrenVisible,
    component: component,
    id: menu.id,
    security: menu.security
  }
}
const eachMenus = function (menu, routes, res) {
  if (menu.children) {
    // menu.redirect = menu.children[0].menuPath
    menu.children.forEach(nextMenu => {
      const _menu = menuToRoute(nextMenu, routes[nextMenu.menuPath] || routes['/wrapperView'])
      res.push(_menu)
      if (nextMenu.children) {
        _menu.children = []
      }
      eachMenus(nextMenu, routes, _menu.children)
    })
  }
}

export const mutipleMenusHandle = (menus, routes, errors) => {
  const _routes = []
  const layout = routes['/layout']
  const children = []
  let indexPath = ''
  let _menus
  menus.forEach(firstMenu => {
    if (firstMenu.menuPath === '/' || firstMenu.id === 1) {
      firstMenu.children.forEach(secondMenu => {
        if (secondMenu.homePage || secondMenu.menuCode === 'homePage' || secondMenu.menuCode === 'home') {
          if (secondMenu.children && secondMenu.children.length !== 0) {
            indexPath = secondMenu.children[0].menuPath
          } else {
            indexPath = secondMenu.menuPath
          }
        }
        // wrapper 用于嵌套一层router-view
        const c = routes[secondMenu.menuPath] || routes['/wrapperView']
        const r = {
          ...menuToRoute(secondMenu, c),
          children: []
        }
        eachMenus(secondMenu, routes, r.children)
        children.push(r)
      })
      _menus = {
        path: '/',
        redirect: indexPath,
        component: layout,
        children,
        name: firstMenu.menuCode,
        meta: {
          title: firstMenu.menuName
        },
        childrenVisible: true
      }
      _routes.push(_menus)
    } else {
      _routes.push(menuToRoute(firstMenu, routes[firstMenu.menuPath]))
    }
  })
  errors && errors.length && _routes.push(...errors)
  genLastRoutes(_menus.children)
  console.log(_routes, 'routes ----------')
  return _routes
}
