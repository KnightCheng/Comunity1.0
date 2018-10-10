<template>
  <input @click="handelC"  :val ="val" :color="color" :class="'css'"/>
</template>

<script>
export default {
  name: 'BInput',
  props: {
    val: {
      type: [String, Number],
      default: ''
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    handleClick (event) {
      const val = event.target.value
      this.$emit('input',val)
    },
    handelC () {
      alert(this.color)
    }
  }
}
</script>

<style>
.css {
  background-color: red
}
</style>
