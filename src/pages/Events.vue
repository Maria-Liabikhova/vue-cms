<template>
  <div>
    <h1>Events</h1>
    <hr>
    <hr>
    <h2 @mouseover="onHover" @mouseout="noHover"> Counter: {{ count }}</h2>
    <!-- <button class="events-btn" @click="count++">+1</button> -->
    <button class="events-btn" @click="addCount">+1</button>
    <button class="events-btn" @click="count--">-1</button>
    <h2> {{ title }}<br> Result:{{ countSecond }}</h2>
    <button class="events-btn events-btn--long" @click="addCountSecond(5, 'Changed on 5')">+5</button>
    <button class="events-btn events-btn--long" @click="addCountSecond(10, 'Changed on 10')">+10</button>

    <br><router-link to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      count: 0,
      countSecond: 0,
      title: 'Count:'
    }
  },
  methods: {
    addCount: function() {
      this.count++
    },
    addCountSecond: function(num, str) {
      this.countSecond+=num
      this.title = str
      if (num === 5) {
        event.target.style.color = 'blue'
      } else if (num === 10) {
        event.target.style.color = 'red'
      }
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
.events-btn--long {
  width: 70px
  }
</style>