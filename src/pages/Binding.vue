<template>
  <div>
    <h1>Binding HTML Classes</h1>
    <hr>
    <hr>
    <!-- <button :class="{'large': fontSize, 'border-red': border}">{{title}}</button> -->
    <!-- <button :class="[fontSize ? 'large': '',{'border-red': border}]">{{title}}</button> -->
    <button :class="getCss">{{title}}</button>
    <ul>
      <li>
        <input type="checkbox" v-model="fontSize">
        <label for="">Font size</label>
      </li>
      <li>
        <input type="checkbox" v-model="border">
        <label for="">Border</label>
      </li>
    </ul>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Binding',
  data() {
    return {
      title: "The best button",
      fontSize: false,
      border: false 
    }    
  },
  computed: {
    getCss () {
      return {
        'large': this.fontSize,
        'border-red': this.border
      }
    }
  }
}
</script>

<style scoped>
.large {
  font-size: 50px;
}
.border-red {
  border: 1px dashed red;
}
</style>