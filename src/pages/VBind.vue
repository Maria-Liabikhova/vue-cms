<template>
  <div >
    <h1>VBind Method</h1>
    <hr>
    <hr>
    <h2><a :href="url">Google</a></h2>
    <h2><input type="text" :value="name"></h2>
    <h2 v-html="markup"></h2>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'VBind',
  data() {
    return {
      url: 'http://google.com',
      markup: '<a href="http://yandex.ru">Yandex</a>',
      name: 'Maria'
    }
  },
}
</script>