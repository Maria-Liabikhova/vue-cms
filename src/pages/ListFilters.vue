<template>
  <div>
    <h1>List Filters</h1>
    <hr>
    <hr>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name in filteredNames" :key="name.id">{{ name }}</li>
    </ul>
    <hr>
    <app-list></app-list>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
import listMixin from '../listMixin'
export default {
  name: 'ListFilters',
  mixins: [listMixin ]
}
</script>