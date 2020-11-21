<template>
  <div>
    <h1>List Rendering</h1>
    <hr>
    <hr>
    <ul>
      <li 
      v-for="(student, index) in students"
      :key="student.id"
      >{{ index +1}}. {{student.name}} <b>{{student.age}}</b></li>
    </ul>
    <hr>
    <span
    v-for="n in 10"
    :key="n.id"
    >{{ n }}</span>
    <hr>
    <ul>
      <li 
      v-for="(value, key, index) in person"
      :key="value.id"
      ><em>{{index+1}}</em> <b>{{ key }}</b> {{value}}</li>
    </ul>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'ListRendering',
  data() {
    return {
      students: [
        {name: 'Maria', age: '32'},
        {name: 'Alexandr', age: '33'},
        {name: 'Irina', age: '32'},
      ],
      person: {
        name: 'Maria',
        age: 32,
        job: 'frontend',
      }
    }    
  }
}
</script>