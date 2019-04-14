const api = _ => import(/* webpackChunkName: 'api' */ 'views/api/index.vue')
const doc = _ => import(/* webpackChunkName: 'doc' */ 'views/doc/index.vue')
const layout = _ => import(/* webpackChunkName: 'layout' */ 'views/layout/index.vue')
const sample = _ => import(/* webpackChunkName: 'sample' */ 'views/sample/index.vue')
const wrapperView = _ => import(/* webpackChunkName: 'wrapperView' */ 'views/wrapperView/index.vue')

export default {
  '/api': api,
  '/doc': doc,
  '/layout': layout,
  '/sample': sample,
  '/wrapperView': wrapperView
}