<template>
  <div>
    <h1>DataAndMethods</h1>
    <hr>
    <hr>
    <h3>Hello {{ message }}</h3>
    <h3>Sum: {{ 1 + 2 }}</h3>
    <input type="text" v-model="message">
    <pre>{{ $data }}</pre>
    <div class="student">
      <h3>{{ sayHello() }}</h3>
      <h3>Age {{ age }}</h3>
      <h3>If statement: {{ isStudent ? "student" : "not a student" }}</h3>
      <h3>Functions: {{ string.split('').reverse().join('') }}</h3>
    </div>
    <router-link to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'DataAndMethods',
  data() {
    return {
      message: 'Vuejs',
      age: '32',
      isStudent: true,
      name: 'Maria',
      string: 'My name is Maria',
    }
  },
  methods: {
    sayHello: function() {
      return 'Hello my name is ' + this.name
    }
  }
}
</script>