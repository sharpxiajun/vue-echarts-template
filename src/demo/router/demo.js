const api = _ => import(/* webpackChunkName: 'api' */ 'views/api/index.vue')
const help = _ => import(/* webpackChunkName: 'help' */ 'views/help/index.vue')
const layout = _ => import(/* webpackChunkName: 'layout' */ 'views/layout/index.vue')
const sample = _ => import(/* webpackChunkName: 'sample' */ 'views/sample/index.vue')
const wrapperView = _ => import(/* webpackChunkName: 'wrapperView' */ 'views/wrapperView/index.vue')

export default {
  '/api': api,
  '/help': help,
  '/layout': layout,
  '/sample': sample,
  '/wrapperView': wrapperView
}