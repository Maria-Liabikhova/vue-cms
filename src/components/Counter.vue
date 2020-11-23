<template>
  <div class="counter">
    <h2>Counter: {{counter}}</h2>
  </div>
</template>

<script>
import {eventEmitter} from '../main'
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0
    }
  },
  created () {
    eventEmitter.$on('counterUpdated', (num) =>
    this.counter+= num
  )}
}
</script>

<style scoped>
.counter {
  margin-top: 10px;
  border: 3px solid greenyellow;
}
</style>