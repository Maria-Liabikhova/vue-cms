<template>
  <div>
    <h1>Filters</h1>
    <hr>
    <hr>
    <h2>{{title}}</h2>
    <h2>{{title | uppercase}}</h2>
    <h2>{{title | snippet}}</h2>
    <h2>{{title | snippet |uppercase}}</h2>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      title: "Study filters"
    }    
  },
  filters: {
    uppercase (value) {
      return value.toUpperCase()
    }
  }
}
</script>