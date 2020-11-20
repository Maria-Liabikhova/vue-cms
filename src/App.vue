<template>
  <div id="app">
    <h4>Vue-cms Content Management System</h4>
    <hr>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
h1{
  color: rgb(42, 86, 92);
}
.home-link {
  margin-top: 40px;
  position: absolute;
}
</style>