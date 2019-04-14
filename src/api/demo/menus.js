function menus() { // eslint-disable-line
  return [{
    'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
    'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
    'menuCode': '/',
    'menuIcon': 'fa fa-edit',
    'menuName': 'VUE-ECHARTS-TEMPLATE',
    'menuPath': '/',
    'treeNodeType': 'Leaf',
    'children': [{
      'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'menuCode': 'home',
      'menuIcon': 'fa fa-edit',
      'menuName': '基础实例',
      'menuPath': '/sample',
      'treeNodeType': 'Leaf'
    }, {
      'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'menuCode': 'doc',
      'menuIcon': 'fa fa-edit',
      'menuName': '操作文档',
      'menuPath': '/doc',
      'treeNodeType': 'Leaf'
    }, {
      'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
      'menuCode': 'api',
      'menuIcon': 'fa fa-edit',
      'menuName': 'API说明',
      'menuPath': '/api',
      'treeNodeType': 'Leaf'
    }]
  }]
}
module.exports.menus = menus
