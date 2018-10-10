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
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
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


