import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

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
