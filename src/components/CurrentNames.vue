<template>
  <div id="current-todos" class="container">
    <h3 v-if="names.length > 0">Current({{names.length}})</h3>
    <ul >

      <li class="list-group-item" v-for="name in names">
        {{name.body}}

      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    methods: {

    },
    computed: {
      names(){
        return this.$store.getters.names
      }
    }
  }
</script>
<style>

</style>
