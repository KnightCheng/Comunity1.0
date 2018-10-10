import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/utils'

Vue.use(Router)

const router = new Router({
  // routes: routes 简写形式 ES6语法
  routes,
  mode: 'hash' // 路由中mode两种模式(hash/history) hash模式路由前有‘#’，history没有'#'
})
// 全局前置守卫

const HAS_LOGINED = true

/**
 * to: 即将跳转页面的路由对象
 * from: 当前离开页面的路由对象
 * next: next函数
*/
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// 后置钩子

router.afterEach((to, from) => {
  // logining = false  等待加载的效果
})

// 导航被确认之前，全局守卫

// router.beforeResolve()

export default router

// 完整的导航解析流程
/**
 * 1.导航被触发
 * 2.在失活的组件里（即将离开的页面组件）调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件(即将进入的页面组件)里调用 beforeRouterEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEache
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouter守卫传给next的回调函数
*/
