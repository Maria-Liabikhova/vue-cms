<template>
  <div class="child">
    <h1>Passing Data to Child Components</h1>
    <hr>
    <hr>
    <h2>Children`s title: {{titleFromPar}} </h2>
    <p>info: {{textFromPar}}</p>
    <button @click="changeName">change name</button>
    <button @click="changeFunk">change from parent</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
import {eventEmitter} from '../main'
export default {
  name: 'PassingToChild',
  props: ['titleFromPar', 'textFromPar', 'changeFunk'],
  methods: {
    changeName() {
      this.titleFromPar = "Don't forget to buy a presents for your dears"
      this.$emit('nameChange', this.titleFromPar)
    },
    updateCounter() {
      eventEmitter.$emit('counterUpdated', 5)
    }
  },
}
</script>

<style scoped>
.child {
  border: 3px solid rgb(135, 31, 48)
}
</style>