<template>
  <div>
    <h1>Computed Properties and Watchers</h1>
    <hr>
    <hr>
    <form>
      <span> {{text}} / 30</span>
      <textarea v-model="textValue"></textarea>
      <button v-if="text <= 30">Send</button>
    </form>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'ComputedPropWatch',
  data() {
    return {
      textValue: "text"
    }    
  },
  computed: {
    text: function() {
      return this.textValue.length
    }
  },
  watch: {
    textValue: function() {
      console.log(this.textValue)
    }
  }
}
</script>