<template>
  <div class="child">
    <h1>Passing Data to Child Components</h1>
    <hr>
    <hr>
    <!-- <h2>Children`s title: {{titleFromPar}} / {{ reverseName }}</h2> -->
    <h2>Children`s title: {{titleFromPar}} </h2>
    <p>info: {{textFromPar}}</p>
    <button @click="changeName">change name</button>
    <button @click="changeFunk">change from parent</button>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'PassingToChild',
  props: ['titleFromPar', 'textFromPar', 'changeFunk'],
  methods: {
    changeName() {
      this.titleFromPar = "Don't forget to buy a presents for your dears"
      this.$emit('nameChange', this.titleFromPar)
    }
  },
  // data () {
    //   return {
      //     // chTitle: "happy new year",
  //     chText: "2021 is the white metallic bull year"
  //   }
  // },
  computed: {
    reverseName () {
      return this.titleFromPar.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
.child {
  border: 3px solid rgb(135, 31, 48)
}
</style>