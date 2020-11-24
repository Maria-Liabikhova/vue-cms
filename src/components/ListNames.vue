<template>
  <div>
    <h1>List names</h1>
    <hr>
    <hr>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
import listMixin from '../listMixin'
export default {
  name: 'ListNames',
  mixins: [listMixin ]
}
</script>