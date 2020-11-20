<template>
  <div>
    <h1>Conditional Rendering</h1>
    <hr>
    <hr>
    <!-- <h2 v-if="isVisible">Visible</h2>
    <h2 v-else>Invisible</h2> -->
    <h2 v-show="isVisible">Visible</h2>
    <h2 v-show="!isVisible">Invisible</h2>
    <button @click="isVisible = !isVisible">Toogle</button>
    <hr>
    <h2 v-if="char === 'a'">A</h2>
    <h2 v-else-if="char === 'b'">B</h2>
    <h2 v-else-if="char === 'c'">C</h2>
    <h2 v-else>Not Match</h2>
    <input type="text" v-model="char">
    <template v-if="isVisible">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, corrupti!</p>
    </template>
    <template v-else>
      <h2 style="color: red">Title</h2>
      <p style="color: red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, corrupti!</p>
    </template>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'CondRendering',
  data() {
    return {
      isVisible: true,
      char: 'a'
    }    
  }
}
</script>