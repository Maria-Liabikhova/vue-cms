<template>
  <div id="app">
    <h1>Hello {{ message }}</h1>
    <h2>Sum: {{ 1 + 2 }}</h2>
    <input type="text" v-model="message">
    <pre>{{ $data | json }}</pre>
    <div class="student">
      <h2>{{ sayHello() }}</h2>
      <h2>Age {{ age }}</h2>
      <h2>If statement: {{ isStudent ? "student" : "not a student" }}</h2>
      <h2>Functions: {{ string.split('').reverse().join('') }}</h2>
    </div>
    <VBind />
  </div>
</template>

<script>
import VBind from '@/components/VBind'
export default {
  name: 'app',
  data() {
    return {
      message: 'Vuejs',
      age: '32',
      isStudent: true,
      name: 'Maria',
      string: 'My name is Maria',
    }
  },
  components: {
    VBind},
  methods: {
    sayHello: function() {
      return 'Hello my name is ' + this.name
    }
  }
}
</script>