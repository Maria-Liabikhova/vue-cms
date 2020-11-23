<template>
  <div>
    <h1>List Filters</h1>
    <hr>
    <hr>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name in filteredNames" :key="name.id">{{ name }}</li>
    </ul>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'ListFilters',
  data() {
    return {
      search: '',
      names: ['Maria', 'Aleksandr', 'Irishka']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !==-1
      })
    }
  }
}
</script>