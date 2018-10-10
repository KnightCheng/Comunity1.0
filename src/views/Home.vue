<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">下一页</button> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'Apple'
    }
  },
  // 组件即将进入的时候
  beforeRouteEnter (to, from, next) {
    console.log(from.name)
    // vm组件实例，在next方法之前不能用this. 因为只有调用next方法，组件才会渲染
    next(vm => { 
      //console.log(vm)
    })
  },
  // 组件即将离开的时候，常用于确认操作
  beforeRouteLeave (to, from, next){
    // 
    const leave=confirm('您确定要离开吗？')
    if (leave) next()
    else next(false)
  },
  // 组件被复用时，执行
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  },
  methods: {
    handleClick(type) {
      // this.$router.go(-1) // -1：返回上一页，1：下一页 back()方法和go(-1)作用相同
      // this.$router  是main.js中vue定义的全局变量
      if(type === 'back') this.$router.back()
      //es6模板写法
      else if(type === 'push') {
        const name02='paradise'
        this.$router.push({
          //path: `/argu/${name02}`
        name: 'argu',
        params: {
          name: 'lison'
        }
        // query: {
        //   food: 'lison'
        // }
      })}
      else if(type === 'replace') this.$.router.replace({
        name: 'parent'
      })
    }
  }
}
</script>

