<template>
  <div>

  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push('/login')
  },
  layout: 'newLayout',
  name: 'IndexPage',
}
</script>
