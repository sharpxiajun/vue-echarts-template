function menus() { // eslint-disable-line
  return [{
    'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
    'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
    'menuCode': '/',
    'menuIcon': '',
    'menuName': 'VUE ECHARTS TEMPLATE',
    'menuPath': '/',
    'treeNodeType': 'Leaf',
    'children': [{
      'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'menuCode': 'home',
      'menuIcon': 'iconditu5',
      'menuName': '基础实例',
      'isVisible': true,
      'menuPath': '/sample',
      'treeNodeType': 'Leaf'
    }, {
      'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'menuCode': 'help',
      'menuIcon': 'iconbangzhushouce',
      'menuName': '帮助说明',
      'isVisible': true,
      'menuPath': '/help',
      'treeNodeType': 'Leaf'
    }]
  }]
}
module.exports.menus = menus
