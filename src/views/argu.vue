<template>
  <div>
    <!-- route当前加载路由对象 -->
    {{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  }
}
</script>



