<template>
  <h2><a v-bind:href="url">Google</a></h2>
</template>

<script>
export default {
  name: 'VBind',
  data() {
    return {
      url: 'http://google.com',
      markup: '<a href="http://google.com">Google</a>',
    }
  },
}
</script>