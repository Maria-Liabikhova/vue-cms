<template>
  <div>
    <h1>Binding Inline Styles</h1>
    <hr>
    <hr>
    <button :class="getCss" :style="css">{{title}}</button>
    <ul>
      <li>
        <input type="checkbox" v-model="fontSize">
        <label for="">Font size</label>
      </li>
      <li>
        <input type="checkbox" v-model="border">
        <label for="">Border</label>
      </li>
      <li>
        <input type="text" v-model="backg">
        <label for="">Background</label>
      </li>
      <li>
        <input type="range" v-model="range">
        <label for="">Move button</label>
      </li>
    </ul>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'BindingInlineStyles',
  data() {
    return {
      title: "The best button",
      fontSize: false,
      border: false,
      backg: 'pink',
      range: 20
    }    
  },
  computed: {
    getCss () {
      return {
        'large': this.fontSize,
        'border-red': this.border
      }
    },
    css () {
      return {
        'background': this.backg,
        'margin-left': this.range + '%'
      }
    },
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