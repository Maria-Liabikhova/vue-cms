<template>
  <div>
    <h1>Home page</h1>
    <hr>
    <hr>
    <router-link to="/DataAndMethods">Data And Methods</router-link><br>
    <router-link to="/Events">Events</router-link><br>
    <router-link to="/EventModifiers">Event Modifiers</router-link><br>
    <router-link to="/KeyboardModifires">Keyboard Modifiers</router-link><br>
    <router-link to="/Bindings">Two ways data bindings</router-link><br>
    <router-link to="/CondRendering">Conditional Rendering</router-link><br>
    <router-link to="/ListRendering">List Rendering</router-link><br>
    <router-link to="/ComputedPropWatch">Computed Properties and Watchers</router-link><br>
    <router-link to="/Refs">Refs and management html-elements</router-link><br>
    <router-link to="/Binding">Binding HTML Classes</router-link><br>
    <router-link to="/BindingInlineStyles">Binding Inline Styles</router-link><br>
    <router-link to="/PassingToChild">Passing Data to Child Components</router-link><br>
    <hr>
    <h2>Parent title: {{title}} </h2>
    <PassingToChild :parentTitle="title" :message="text" />
  </div>
</template>

<script>
import PassingToChild from './PassingToChild.vue'
export default {
  name: 'Home',
  data() {
    return {
      title: "Merry Christmas",
      text: "2021 year is the year of the white metal bull",
    }
  },
  components: {PassingToChild}
}
</script>