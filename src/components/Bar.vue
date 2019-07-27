<template>
  <div id="bar">
    Bar ---{{getUsername}}
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
    }
  },
  computed: {
    getUsername: function() {
      return this.$store.getters.getUsername
    }
  }
}
</script>

<style lang="scss">
</style>
