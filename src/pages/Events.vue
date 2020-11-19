<template>
  <div>
    <h1>Events</h1>
    <hr>
    <hr>
    <h2 @mouseover="onHover" @mouseout="noHover"> Counter: {{ count }}</h2>
    <!-- <button class="events-btn" @click="count++">+1</button> -->
    <button class="events-btn" @click="addCount">+1</button>
    <button class="events-btn" @click="count--">-1</button>

    <br><router-link to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount: function() {
      this.count++
    },
    onHover: function() {
      event.target.style.color = "red"
    },
    noHover: function() {
      event.target.style.color = "blue"
    }
  }
}
</script>

<style scoped>
.events-btn {
  margin-bottom: 40px;
}
</style>