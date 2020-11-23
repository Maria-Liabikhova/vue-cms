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
    <h2>Parent: {{ parTitle }} </h2> 
    <PassingToChild :titleFromPar="parTitle" 
    :textFromPar="textPar"
    @nameChange='parTitle = $event'
    />
    <!-- <PassingToChild  :textFromPar="textPar"/> -->
  </div>
</template>

<script>
import PassingToChild from './PassingToChild.vue'
export default {
  name: 'Home',
  data() {
    return {
      parTitle: "MERRY CHRISTMAS",
      textPar: "2021 IS THE WHITE METALLIC BULL YEAR"
    }
  },
  components: {PassingToChild}
}
</script>