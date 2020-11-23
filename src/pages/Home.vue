<template>
  <div>
    <h1>Home page</h1>
    <hr>
    <hr>
    <router-link to="/DataAndMethods">Data And Methods</router-link><br>
    <router-link to="/VBind">VBind Method</router-link><br>
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
    <router-link to="/Directives">Directives</router-link><br>
    <router-link to="/Filters">Filters</router-link><br>
    <router-link to="/ListFilters">List Filters</router-link><br>
    <hr>
    <h2>Parent: {{ parTitle }} </h2> 
    <PassingToChild :titleFromPar="parTitle" 
    :textFromPar="textPar"
    :changeFunk="changeMadeInPar"
    @nameChange='parTitle = $event'
    @counterUpdated='counter = $event'
    />
    <Counter />
  </div>
</template>

<script>
import PassingToChild from '../components/PassingToChild.vue'
import Counter from '../components/Counter.vue'
export default {
  name: 'Home',
  data() {
    return {
      parTitle: "MERRY CHRISTMAS",
      textPar: "2021 IS THE WHITE METALLIC BULL YEAR"
    }
  },
  methods: {
    changeMadeInPar () {
      this.parTitle = '`Rudolf`- is the name of Santa`s deer :)'
    }
  },
  components: {PassingToChild, Counter}
}
</script>