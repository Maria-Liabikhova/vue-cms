<template>
  <div>
    <h1>Two ways data bindings</h1>
    <hr>
    <hr>
    <!-- <input type="text" @input="info = $event.target.value" :value="info"> -->
    <!-- <input type="text" v-model="info"> -->
    <input type="text" v-model.lazy="info">
    <h3> {{ info }}</h3>

    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Bindings',
  data() {
    return {
      info: "Initial value "
    }    
  },
  methods: {
  }
}
</script>