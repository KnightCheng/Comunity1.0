import Home from '@/views/Home.vue'
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // 页面逻辑的处理
      if (from.name === 'about') alert('这是从about页来的！')
      else alert('这不是从about页来的！')
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // 懒加载作用，用于优化，只有访问到这个页面的时候才会去加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    }
  },
  // 动态路由匹配
  {
    path: '/argu/:name', // 动态路由参数name
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true // 作用会将$route.params的参数作为属性传进去
  },
  // 嵌套路由写法
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 路由重定向
  {
    path: '/main',
    // redirect: to => '/'   写法一
    // redirect: '/'  写法二
    // redirect: {
    //   name: 'home'
    // },
    redirect: to => {
      // 此处在跳转时，可以用于逻辑判断
      console.log(to)
      return '/'
    }
  },
  // 路由别名 添加alias： 属性即可

  // 重点：编程式的导航

  // 路由组建传参 有三种模式  bool模式(有动态路由传参属性一一对应) \ 对象模式(添加props：属性) \ 函数模式

  // path*  当匹配不到页面时，作为404页面
  // 这个路由规则，一定要定义到最后
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }

]
