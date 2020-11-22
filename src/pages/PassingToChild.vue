<template>
  <div>
    <h1>Passing Data to Child Components</h1>
    <hr>
    <hr>
    <h2>Child's title: {{parentTitle}} /{{reverseName}}</h2>
    <p>text: {{message}}</p>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'PassingToChild',
  props: {
    parentTitle: {
      type: String,
      default: 'Default'
    },
    message: Number
  },
  computed: {
    reverseName () {
      return this.parentTitle.split('').reverse().join('')
    }
  }
}
</script>