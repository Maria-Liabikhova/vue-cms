<template>
  <div>
    <h1>Passing Data to Child Components</h1>
    <hr>
    <hr>
    <h2>Child's title: {{parentTitle}} </h2>
    <p>{{message}}</p>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'PassingToChild',
  props: [ 'parentTitle', 'message'],
}
</script>