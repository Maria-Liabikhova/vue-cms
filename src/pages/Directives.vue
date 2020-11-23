<template>
  <div>
    <h1>Directives</h1>
    <hr>
    <hr>
    <h2 v-colored>{{ title}}</h2>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Directives',
  data() {
    return {
      title: "Study directives"
    }    
  }
}
</script>