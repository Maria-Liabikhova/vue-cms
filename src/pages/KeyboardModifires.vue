<!-- событие alert при нажатии ENTER и клавиши UP -->
<template>
  <div>
    <h1>Keyboard Modifires</h1>
    <hr>
    <hr>
    <input type="text" @keyup.enter.up="alertValue">
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'KeyboardModifires',
  methods: {
    alertValue: function(event) {
      alert(event.target.value)
    }
  }
}
</script>