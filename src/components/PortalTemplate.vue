<template>
  <div id="portal-template">
    <img class="portal-logo" src="../assets/images/logo.png" alt="秒杀logo">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'portal-template',
  data () {
    return {}
  },
}
</script>

<style lang="scss">
@import '../assets/css/replace-elementui.css';
</style>
