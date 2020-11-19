<template>
  <div>
    <h2><a :href="url">Google</a></h2>
    <h2><input type="text" :value="name"></h2>
    <h2 v-html="markup"></h2>
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