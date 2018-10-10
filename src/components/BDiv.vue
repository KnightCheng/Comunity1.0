<template>
  <div @click="handleClick" >test</div>
</template>

<script>
export default {
  name: 'BDiv',
  props: {
    color: {
      type: String,
      default: '#000'
    },
    msg: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleClick () {
      alert(this.msg)
    }
  }
}
</script>

<style>

</style>
