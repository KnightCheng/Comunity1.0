<template>
  <div>
    <!-- <a-input v-model="inputValue" />
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue"/> -->
    <p>......</p>
    <!-- <b-input v-model="inputValue" :color="'black'"/> -->
    <input v-model="inputValue"/>
    <a-show :content="inputValue"/>
    <p>........</p>
    <b-div :color="'red'" :msg="inputValue"/>
    <p>lastLetter:{{ inputValueLastLetter }}</p>
    <p>appNameWithVersion:{{ appNameWithVersion }}</p>

    <p>{{appName}}</p>
    <p>{{userName}}</p>
    <p>firstLetter: {{firstLetter}}</p>
    <p>AppName : {{ appName }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>UserName : {{ userName }}</p>
    <button @click="handleChangeUserName">修改userName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>
/**父子组件通信 */
// 父组件向子组件传值通过v-model
// 子组件修改值通过调用事件的方式  vue单项数据流

/**兄弟组件通信 *//
//
<script>
import AShow from '_c/AShow'
import AInput from '_c/AInput'
import BInput from '_c/BInput'
import BDiv from '_c/BDiv'
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    appName() {
      return this.$store.state.appName
    },
    // userName() {
    //   return this.$store.state.user.userName
    // }
    // ...ES6展开操作符和剩余操作符，它会返回一个包括东西的对象
    ...mapState('user',{
      // appName: state => state.appName,
      userName: state=> state.userName,
      todoList: state=> state.todo ? state.todo.todoList : []
    }),
    // ...mapState({
    //   todoList: state => state.todo ? state.todo.todoList : [] 
    // }
    // ),
    // ...mapGetters(
    //   ['appNameWithVersion']
    // ),
    ...mapGetters('user',[
      'firstLetter'
    ]),
    inputValueLastLetter() {
      return this.inputValue.substr(-1,1)
    },
    appNameWithVersion() {
      return this.$store.getters.appNameWithVersion
    }
    // 另外一种写法
    // ...mapState([
    //   'appName',
    //   'user.userName'
    // ])
  },
  methods:{
    ...mapMutations(['SET_APP_NAME']),
    ...mapMutations('user',['SET_USER_NAME']),
    ...mapActions([
      'updateAppName'
    ]),
    handleChangeAppName () {
      // this.$store.commit('SET_APP_NAME', 'NewAppName')
      // this.SET_APP_NAME('newAppName')
      this.updateAppName()
    },
    handleChangeUserName () {
      this.SET_USER_NAME('paradise')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            'study mutations',
            'study actions',
            'study state',
            'study getters'
          ]
        }
      })
    }
  },
  components: {
    AInput,
    AShow,
    BInput,
    BDiv
  }
}
</script>

<style>

</style>


