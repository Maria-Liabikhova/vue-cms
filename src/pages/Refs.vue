<template>
  <div>
    <h1>Refs and management html-elements</h1>
    <hr>
    <hr>
    <h2 ref="heading">{{ title }}</h2>
    <button @click="changeTitle">Change Title</button>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Refs',
  data() {
    return {
      title: "Title"
    }    
  },
  methods: {
    changeTitle: function() {
      this.title = 'New Title'
      this.$refs.heading.style.color = 'pink'
      console.log(this.$refs)
      // console.log(document.querySelector('h2'))
    }
  }
}
</script>