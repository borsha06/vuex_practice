<template>
  <div id="current-todos" class="container">

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
